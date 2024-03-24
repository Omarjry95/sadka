import React, {useMemo} from 'react';
import {Select} from "@app/reusable";
import {View} from "react-native";
import styles from '../styles';
import {WsListSelectBaseProps} from "@app/api/models";
import {ListItemProps} from "@app/reusable/select/models";
import ItemImage from "@app/reusable/select/variants/modal/itemImage";
import {DEFAULT_SELECT_ITEM_ICON_DIMENSION} from "@app/reusable/select/constants";
import {AssociationBaseProps} from "@app/screens/profile/models";

export default function Association({ list, defaultAssociation, setNewDefaultAssociation }: AssociationBaseProps) {

    const formattedAssociations: ListItemProps[] = useMemo(() => {
        let associations: ListItemProps[] = list.map(({ _id: id, label, photo }: WsListSelectBaseProps) => ({
            id,
            label,
            leftComponent: () => (
                <ItemImage
                    photoUrl={photo}
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