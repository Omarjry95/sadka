import React, {useCallback, useMemo} from 'react';
import {View} from "react-native";
import styles from './styles';
import {BaseProps, BaseStrictProps} from "@app/reusable/radioGroup/models";
import Bordered from "@app/reusable/radioGroup/variants/bordered";
import {getStyleMargin, getStylePadding} from "@app/utilities/spacing";
import {getStyleBorder} from "@app/utilities/border";
import {useTheme} from "@react-navigation/native";
import {Margin} from "@app/utilities/globalModels";

export default function RadioGroup({ variant, ...props }: BaseProps) {

    const { list = [], value, columns = 2, padding, cellPadding,
        margin, cellMargin, border, labelSize,
        labelTransform, setValue } = props;

    const { colors } = useTheme();

    const RadioVariant: (_props: BaseStrictProps) => JSX.Element = useMemo(() => {
        switch (variant) {
            case 'bordered':
            default:
                return Bordered;
        }
    }, [variant]);

    const variantProps = useCallback((id: string, label: string = "", index: number): BaseStrictProps => {
        let margins: Margin = {
            marginTop: 0,
            marginBottom: 0,
            marginRight: 0,
            marginLeft: 0
        }

        if (cellMargin && columns > 1) {
            if (cellMargin.r) {
                margins = {
                    ...margins,
                    marginRight: (index + 1) % columns !== 0 ? cellMargin.r : 0
                }
            }

            if (cellMargin.b) {
                const rows: number = list.length / columns + (list.length % columns !== 0 ? 1 : 0);

                margins = {
                    ...margins,
                    marginBottom: list.length > columns && index < (rows - 1) * columns ? cellMargin.b : 0
                }
            }
        }

        return {
            ...props,
            selected: id === value,
            label,
            width: 100 / columns,
            paddings: getStylePadding(cellPadding),
            margins,
            borders: getStyleBorder(border),
            selectionColor: colors.primary,
            labelSize: labelSize ?? 16,
            labelTransform: labelTransform ?? 'none',
            setValue: () => setValue(id)
        }
    }, [props, colors]);

    return (
        <View style={{
            ...styles.container,
            ...getStylePadding(padding),
            ...getStyleMargin(margin)
        }}>
            {list.map((item, index) => (
                <RadioVariant {...variantProps(item.id, item.label, index)} />
            ))}
        </View>
    )
}