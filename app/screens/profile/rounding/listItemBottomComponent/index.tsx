import React, {useCallback, useMemo} from 'react';
import {Text} from "@app/reusable";
import {euroSymbol} from "@app/utilities/regex";

export default function ListItemBottomComponent({ exampleNumber, power }: { exampleNumber: number, power: number }) {

  const tenPower = useCallback((pow: number): number => Math.pow(10, pow), []);

  const getCurrencyAmount = useCallback((amount: number): string => `${amount / tenPower(3)}${euroSymbol}`, []);

  const rangedExampleNumber: number = useMemo(() => Math.floor(exampleNumber * (tenPower(8) - tenPower(7)) + tenPower(7)),
    [exampleNumber]);

  const roundedNumber: number = (Math.floor(rangedExampleNumber / tenPower(power)) + 1) * tenPower(power);

  return (
    <Text
      margin={{ t: 5 }}
      color="black"
      size={10}
      align="justify"
      value={`L'arrondi par excès du montant ${getCurrencyAmount(rangedExampleNumber)} est égal à ${getCurrencyAmount(roundedNumber)}. ` +
        `Un montant de ${getCurrencyAmount(roundedNumber - rangedExampleNumber)} va être transféré vers le solde de l'association de votre choix.`}
    />
  )
}