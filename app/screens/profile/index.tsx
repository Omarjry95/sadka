import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {View} from "react-native";
import styles, {SAVE_ACTION_BUTTON_DIMENSIONS} from "@app/screens/profile/styles";
import Picture from "@app/screens/profile/picture";
import Name from "@app/screens/profile/name";
import Association from "@app/screens/profile/association";
import {useDispatch, useSelector} from "react-redux";
import {userSelector} from "@app/global/userSlice";
import {NavigationProp, useFocusEffect, useNavigation, useTheme} from "@react-navigation/native";
import {Button, Text} from "@app/reusable";
import Entypo from "@expo/vector-icons/Entypo";
import {CurrentUserProps} from "@app/global/models";
import {useLazyGetAssociationsQuery, useLazyGetUserDetailsQuery, useUpdateUserMutation} from "@app/api/apis/userApi";
import {hideLoading, hideModal, showLoading, showModal} from "@app/global/globalSlice";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {ProfileStackParamList} from "@app/navigation/models";
import Rounding from "@app/screens/profile/rounding";
import {useLazyGetRoundingsQuery} from "@app/api/apis/roundingApi";
import RestrictedStackParamList from "../../navigation/models/RestrictedStackParamList";

export default function Profile({ navigation }: { navigation: NativeStackNavigationProp<ProfileStackParamList, 'Profile'> }) {

    const [pictureUri, setNewPicture] = useState<string | undefined>(undefined);
    const [nameParts, setNameParts] = useState<string[]>([]);
    const [rounding, setRounding] = useState<string | null>(null);
    const [association, setNewAssociation] = useState<string | null>(null);

    const { currentUser } = useSelector(userSelector);

    const [getRoundings, { data: wsRoundingsData = [], isLoading: isGetRoundingsLoading,
        isError: isGetRoundingsError }] = useLazyGetRoundingsQuery();

    const [getAssociations, { data: wsAssociationsData = [], isLoading: isGetAssociationsLoading,
        isError: isGetAssociationsError }] = useLazyGetAssociationsQuery();

    const [updateUser, { isLoading: isUpdateUserLoading, isError: isUpdateUserError }] = useUpdateUserMutation();

    const [getUserDetails, { isLoading: isGetUserDetailsLoading, isSuccess: isGetUserDetailsSuccess,
        isError: isGetUserDetailsError }] = useLazyGetUserDetailsQuery();

    const dispatch = useDispatch();

    const parentNavigation = useNavigation<NavigationProp<RestrictedStackParamList>>();

    const { colors } = useTheme();

    useFocusEffect(
      useCallback(() => {
          getAssociations()
            .then(() => getRoundings())
            .then(() => {
                if (currentUser) {
                    const { defaultRounding, defaultAssociation, photo } = currentUser;

                    setNameParts(partitionName(currentUser));

                    setRounding(defaultRounding ?? null);

                    setNewAssociation(defaultAssociation ?? null);

                    setNewPicture(photo);
                }
            });
      }, [currentUser])
    );

    useEffect(() => {
        dispatch(isGetAssociationsLoading || isGetRoundingsLoading ? showLoading() : hideLoading());

        if (isGetAssociationsError || isGetRoundingsError) {
            dispatch(hideModal());

            dispatch(showModal({
                variant: "error",
                mainAction: () => {
                    dispatch(hideModal());
                    parentNavigation.navigate('Main');
                }
            }));
        }
    }, [isGetAssociationsLoading, isGetRoundingsLoading, isGetAssociationsError, isGetRoundingsError]);

    useEffect(() => {
        dispatch(isUpdateUserLoading || isGetUserDetailsLoading ? showLoading() : hideLoading());

        if (isUpdateUserError || isGetUserDetailsError) {
            dispatch(hideLoading());

            dispatch(showModal({
                variant: "error",
                mainAction: () => dispatch(hideModal())
            }));
        }
    }, [isUpdateUserLoading, isGetUserDetailsLoading, isUpdateUserError, isGetUserDetailsError]);

    const partitionName = useCallback((user: CurrentUserProps): string[] => {
        let parts: string[] = [];

        const { role, firstName, lastName, charityName } = user;

        if (role === 0 && firstName && lastName) { parts.push(firstName, lastName); }
        else if (role === 1 && charityName) { parts.push(charityName); }

        return parts;
    }, [currentUser]);

    const isSaveEnabled: boolean = useMemo(() => {
        let isEnabled: boolean = false;

        if (currentUser) {
            const { photo, defaultAssociation, defaultRounding } = currentUser;

            const isPictureChanged: boolean = pictureUri !== photo;

            const isNameChanged: boolean = nameParts.map((part: string, index: number) => partitionName(currentUser)[index].toLowerCase() !== part.toLowerCase())
                .some((v: boolean) => v);

            const isAssociationChanged: boolean = (association ?? undefined) !== defaultAssociation;

            const isRoundingChanged: boolean = (rounding ?? undefined) !== defaultRounding;

            isEnabled = isPictureChanged || isNameChanged || isRoundingChanged || isAssociationChanged;
        }

        return isEnabled;
    },[currentUser, pictureUri, nameParts, rounding, association]);

    const handleUpdateUser = () => {
        if (currentUser) {
            const { photo, role } = currentUser;

            let wsUpdateUserBody: FormData = new FormData();

            if (nameParts.length === 2 && role === 0) {
                wsUpdateUserBody.append('lastName', nameParts[1]);
                wsUpdateUserBody.append('firstName', nameParts[0]);
            }
            else if (nameParts.length === 1 && role === 1) {
                wsUpdateUserBody.append('charityName', nameParts[0]);
            }

            if (rounding) {
                wsUpdateUserBody.append('defaultRounding', rounding);
            }

            if (association) {
                wsUpdateUserBody.append('defaultAssociation', association);
            }

            if (pictureUri !== photo) {
                wsUpdateUserBody.append('isPhotoChanged', '1');

                if (pictureUri) {
                    const splittedPictureName: string[] = pictureUri.split(".");

                    const pictureExtension: string = splittedPictureName[splittedPictureName.length - 1];

                    wsUpdateUserBody.append('photo', { uri: pictureUri, name: `userProfilePhoto.${pictureExtension}`, type: `image/${pictureExtension}` });
                }
            }

            wsUpdateUserBody.append('role', role.toString());

            updateUser(wsUpdateUserBody).unwrap()
              .then(() => getUserDetails(currentUser.email));
        }
    }

    return (
        <View style={styles.container}>
            <Picture
                pictureUri={pictureUri}
                setNewPicture={setNewPicture}
            />

            <Name
                nameParts={nameParts}
                setNameParts={setNameParts}
            />

            <Rounding
              list={wsRoundingsData}
              rounding={rounding}
              setRounding={setRounding}
            />

            <Association
              list={wsAssociationsData}
              defaultAssociation={association}
              setNewDefaultAssociation={setNewAssociation}
            />

            <Button
              variant="gradient"
              padding={{ v: 20, h: 5 }}
              childComponent={() => (
                <Text
                  variant="normal"
                  value="Changer votre mot de passe"
                />
              )}
              onPress={() => navigation.navigate('ChangePassword')}
            />

            {isSaveEnabled && (
                <Button
                    width={SAVE_ACTION_BUTTON_DIMENSIONS}
                    height={SAVE_ACTION_BUTTON_DIMENSIONS}
                    borderRadius={{ a: SAVE_ACTION_BUTTON_DIMENSIONS / 2 }}
                    position="absolute"
                    positioning={{ b: 20, r: 20 }}
                    style={{ elevation: 8 }}
                    childComponent={() => (
                        <View style={{
                            ...styles.saveButtonContainer,
                            backgroundColor: colors.primary
                        }}>
                            <Entypo
                                name="save"
                                color="black"
                                size={36}
                            />
                        </View>
                    )}
                    onPress={handleUpdateUser}
                />
            )}
        </View>
    )
}