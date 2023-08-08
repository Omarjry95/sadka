import React, {useCallback, useEffect, useMemo} from 'react';
import {Select} from "@app/reusable";
import {View} from "react-native";
import styles from '../styles';
import {useLazyGetAssociationsQuery} from "@app/api/apis/userApi";
import {WsAssociationBaseProps} from "@app/api/models";
import {ListItemProps} from "@app/reusable/select/models";
import ItemImage from "@app/reusable/select/variants/modal/itemImage";
import {DEFAULT_SELECT_ITEM_ICON_DIMENSION} from "@app/reusable/select/constants";
import {useDispatch, useSelector} from "react-redux";
import {userSelector} from "@app/global/userSlice";
import {hideLoading, hideModal, showLoading, showModal} from "@app/global/globalSlice";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RestrictedStackParamList} from "@app/navigation/models";
import {useFocusEffect} from "@react-navigation/native";

export default function Association({ navigation }: { navigation: NativeStackNavigationProp<RestrictedStackParamList, 'Profile'> }) {

    const { currentUser } = useSelector(userSelector);

    const [getAssociations, { data = [], isLoading: isGetAssociationsLoading,
        isError: isGetAssociationsError }] = useLazyGetAssociationsQuery();

    const dispatch = useDispatch();

    useFocusEffect(
        useCallback(() => { getAssociations() }, []));

    useEffect(() => {
        dispatch(isGetAssociationsLoading ? showLoading() : hideLoading());

        if (isGetAssociationsError) {
            dispatch(showModal({
                variant: "error",
                mainAction: () => {
                    dispatch(hideModal());
                    navigation.navigate('Homepage');
                }
            }));
        }
    }, [isGetAssociationsLoading, isGetAssociationsError]);

    const userDefaultAssociation: string | null = useMemo(() => {
        let defaultAssociation: string | null = null;

        if (currentUser?.defaultAssociation) {
            defaultAssociation = currentUser?.defaultAssociation;
        }

        return defaultAssociation;
    },[currentUser])

    const formattedAssociations = useMemo((): ListItemProps[] => {
        let associations: ListItemProps[] = data.map(({ _id: id, label, photoUrl }: WsAssociationBaseProps) => ({
            id,
            label,
            leftComponent: () => (
                <ItemImage
                    photoUrl={photoUrl}
                    diameter={DEFAULT_SELECT_ITEM_ICON_DIMENSION}
                />
            )
        }));

        associations.unshift({
            id: null,
            label: "Aucune association",
            leftComponent: () => <ItemImage diameter={DEFAULT_SELECT_ITEM_ICON_DIMENSION} />
        });

        return associations;
    }, [data]);

    return (
        <View style={styles.selectContainer}>
            <Select
                list={formattedAssociations}
                value={userDefaultAssociation}
                label="Association par défaut"
                width="100%"
                padding={{ a: 15 }}
                border={{ a: 1 }}
                borderColor="black"
                borderRadius={{ a: 10 }}
            />
        </View>
    )
}