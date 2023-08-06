import React, {useMemo} from 'react';
import {Select} from "@app/reusable";
import {View} from "react-native";
import styles from '../styles';
import {useGetAssociationsQuery} from "@app/api/apis/userApi";
import {WsAssociationBaseProps} from "@app/api/models";
import {ListItemProps} from "@app/reusable/select/models";
import ItemImage from "@app/reusable/select/variants/modal/itemImage";

export default function Association() {

    const { data = [] } = useGetAssociationsQuery(undefined, { refetchOnFocus: true, refetchOnMountOrArgChange: true });

    const formattedAssociations = useMemo((): ListItemProps[] => {
        let associations: ListItemProps[] = data.map((association: WsAssociationBaseProps) => {

            const { _id: id, label, photoUrl } = association;

            let formattedAssociation: ListItemProps = { id, label };

            if (photoUrl) {
                formattedAssociation = {
                    ...formattedAssociation,
                    leftComponent: () => (
                        <ItemImage
                            photoUrl={photoUrl}
                            diameter={40}
                        />
                    )
                }
            }

            return formattedAssociation;
        });

        associations.unshift({
            id: null,
            label: "Aucune association"
        });

        return associations;
    }, [data]);

    return (
        <View style={styles.selectContainer}>
            <Select
                list={formattedAssociations}
                value={null}
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