import React, {useMemo} from 'react';
import {Select} from "@app/reusable";
import StoreBaseProps from "@app/screens/donation/models/StoreBaseProps";
import {ListItemProps} from "@app/reusable/select/models";
import {WsListSelectBaseProps} from "@app/api/models";
import ItemImage from "@app/reusable/select/variants/modal/itemImage";
import {DEFAULT_SELECT_ITEM_ICON_DIMENSION} from "@app/reusable/select/constants";

export default function Store({ list, store, setStore }: StoreBaseProps) {

  const formattedStores: ListItemProps[] = useMemo(() => {
    let stores: ListItemProps[] = list.map(({ _id: id, label, photo }: WsListSelectBaseProps) => ({
      id,
      label,
      leftComponent: () => (
        <ItemImage
          photoUrl={photo}
          diameter={DEFAULT_SELECT_ITEM_ICON_DIMENSION}
        />
      )
    }));

    stores.unshift({
      id: null,
      label: "Aucun partenaire",
      leftComponent: () => <ItemImage diameter={DEFAULT_SELECT_ITEM_ICON_DIMENSION} />
    });

    return stores;
  }, [list]);

  return (
    <Select
      list={formattedStores}
      value={store}
      label="Partenaire"
      width="100%"
      padding={{ a: 15 }}
      margin={{ b: 25 }}
      border={{ a: 1 }}
      borderColor="black"
      borderRadius={{ a: 10 }}
      setValue={setStore}
    />
  )
}