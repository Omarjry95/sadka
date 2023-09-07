import React, {useMemo} from 'react';
import {Select} from "@app/reusable";
import {DefaultValueDisplay} from "@app/reusable/complex";
import {ListItemProps} from "@app/reusable/select/models";
import {WsAssociationBaseProps} from "@app/api/models";
import ItemImage from "@app/reusable/select/variants/modal/itemImage";
import {DEFAULT_SELECT_ITEM_ICON_DIMENSION} from "@app/reusable/select/constants";
import AssociationBaseProps from "../../../models/AssociationBaseProps";

export default function Association({ list, association, defaultAssociation, setAssociation }: AssociationBaseProps) {

  const formattedAssociations: ListItemProps[] = useMemo(() => {
    let associations: ListItemProps[] = list.map(({ _id: id, label, photoUrl }: WsAssociationBaseProps) => ({
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
  }, [list]);

  return (
    <DefaultValueDisplay
      autoDisabled={!!defaultAssociation}
      margin={{ b: 25 }}
      borderRadius={{ a: 10 }}
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
      setDefaultValue={() => setAssociation(defaultAssociation)}
    />
  )
}