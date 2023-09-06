import React, {useCallback, useEffect, useMemo} from 'react';
import {Select} from "@app/reusable";
import {DefaultValueDisplay} from "@app/reusable/complex";
import {ListItemProps} from "@app/reusable/select/models";
import {WsAssociationBaseProps} from "@app/api/models";
import ItemImage from "@app/reusable/select/variants/modal/itemImage";
import {DEFAULT_SELECT_ITEM_ICON_DIMENSION} from "@app/reusable/select/constants";
import {useLazyGetAssociationsQuery} from "@app/api/apis/userApi";
import {useFocusEffect} from "@react-navigation/native";
import {hideLoading, hideModal, showLoading, showModal} from "@app/global/globalSlice";
import {useDispatch, useSelector} from "react-redux";
import AssociationBaseProps from "../../models/AssociationBaseProps";
import {userSelector} from "@app/global/userSlice";

export default function Association({ association, setAssociation, navigation }: AssociationBaseProps) {

  const { currentUser } = useSelector(userSelector);

  const [getAssociations, { data: wsAssociationsData = [], isLoading: isGetAssociationsLoading,
    isError: isGetAssociationsError }] = useLazyGetAssociationsQuery();

  const dispatch = useDispatch();

  useFocusEffect(
    useCallback(() => {
      getAssociations()
        .then(() => setAssociationDefaultValue());
    }, []));

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
  }, [isGetAssociationsLoading]);

  const setAssociationDefaultValue = useCallback(() => setAssociation(currentUser?.defaultAssociation ?? null),[currentUser]);

  const formattedAssociations: ListItemProps[] = useMemo(() => {
    let associations: ListItemProps[] = wsAssociationsData.map(({ _id: id, label, photoUrl }: WsAssociationBaseProps) => ({
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
  }, [wsAssociationsData]);

  return (
    <DefaultValueDisplay
      autoDisabled={!!currentUser?.defaultAssociation}
      mainComponent={() => (
        <Select
          list={formattedAssociations}
          value={association}
          label="Vers"
          width="100%"
          padding={{ a: 15 }}
          border={{ a: 1 }}
          borderColor="black"
          borderRadius={{ a: 10 }}
          setValue={setAssociation}
        />
      )}
      setDefaultValue={setAssociationDefaultValue}
    />
  )
}