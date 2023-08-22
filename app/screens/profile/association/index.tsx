import React, {useCallback, useEffect, useMemo} from 'react';
import {Select} from "@app/reusable";
import {View} from "react-native";
import styles from '../styles';
import {useLazyGetAssociationsQuery} from "@app/api/apis/userApi";
import {WsAssociationBaseProps} from "@app/api/models";
import {ListItemProps} from "@app/reusable/select/models";
import ItemImage from "@app/reusable/select/variants/modal/itemImage";
import {DEFAULT_SELECT_ITEM_ICON_DIMENSION} from "@app/reusable/select/constants";
import {useDispatch} from "react-redux";
import {hideLoading, hideModal, showLoading, showModal} from "@app/global/globalSlice";
import {NavigationProp, useFocusEffect, useNavigation} from "@react-navigation/native";
import {AssociationBaseProps} from "@app/screens/profile/models";
import RestrictedStackParamList from "../../../navigation/models/RestrictedStackParamList";

export default function Association({ defaultAssociation, setNewDefaultAssociation }: AssociationBaseProps) {

    const [getAssociations, { data = [], isLoading: isGetAssociationsLoading,
        isError: isGetAssociationsError }] = useLazyGetAssociationsQuery();

    const dispatch = useDispatch();

    const navigation = useNavigation<NavigationProp<RestrictedStackParamList>>();

    useFocusEffect(
        useCallback(() => { getAssociations(); }, []));

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
                value={defaultAssociation}
                label="Association par défaut"
                width="100%"
                padding={{ a: 15 }}
                border={{ a: 1 }}
                borderColor="black"
                borderRadius={{ a: 10 }}
                setValue={setNewDefaultAssociation}
            />
        </View>
    )
}