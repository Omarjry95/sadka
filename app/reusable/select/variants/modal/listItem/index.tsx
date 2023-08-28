import React, {useCallback, useMemo} from 'react';
import {Button, Text} from "@app/reusable";
import {View} from "react-native";
import { ListItemProps } from "../../../models";
import styles from '../styles';
import {ListItemAdditionalProps} from "@app/reusable/select/models";
import {useDispatch} from "react-redux";
import {hideModal} from "@app/global/globalSlice";
import {useTheme} from "@react-navigation/native";

export default function ListItem({ id, index, label, leftComponent: LeftComponent, bottomComponent: BottomComponent, selected, disabled, paddings, setValue }: ListItemProps & ListItemAdditionalProps) {

    const dispatch = useDispatch();

    const { colors } = useTheme();

    const onSetValue = useCallback((): void => {
        if (setValue) {
            setValue(id);

            dispatch(hideModal());
        }
    }, [id, setValue]);

    const itemBorderTopRadius: 0 | 10 = useMemo(() => index === 0 ? 10 : 0, [index]);

    return (
        <Button
            key={id}
            style={{
              ...styles.listItemContainer,
              backgroundColor: selected ? colors.border : "transparent",
              borderTopLeftRadius: itemBorderTopRadius,
              borderTopRightRadius: itemBorderTopRadius
            }}
            disabled={disabled}
            childComponent={() => (
                <View style={{
                    ...styles.listItemWrapper,
                    ...paddings
                }}>
                  <View style={styles.listItemHorizontalContainer}>
                    {LeftComponent && (
                      <LeftComponent />
                    )}

                    <Text
                      italic={id === null}
                      value={label}
                      color="black"
                    />
                  </View>

                  {BottomComponent && (
                    <BottomComponent />
                  )}
                </View>
            )}
            onPress={onSetValue}
        />
    )
}