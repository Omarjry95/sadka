import {Select} from "@app/reusable";
import {DefaultValueDisplay} from "@app/reusable/complex";
import React, {useMemo} from "react";
import {RoundingBaseProps} from "@app/screens/donation/models";
import {ListItemProps} from "@app/reusable/select/models";

export default function Rounding({ list, rounding, defaultRounding, setRounding }: RoundingBaseProps) {

  const formattedRoundings: ListItemProps[] = useMemo(() => {
    let roundings: ListItemProps[] = list.map(({ _id: id, label }) => ({
      id,
      label
    }));

    roundings.unshift({
      id: null,
      label: "Aucun arrondi"
    });

    return roundings;
  }, [list]);

  return (
    <DefaultValueDisplay
      autoDisabled={!!defaultRounding}
      captionText="Votre arrondi par défaut"
      margin={{ b: 25 }}
      borderRadius={{ a: 10 }}
      mainComponent={() => (
        <Select
          list={formattedRoundings}
          value={rounding}
          label="Arrondi"
          width="100%"
          padding={{ a: 15 }}
          border={{ a: 1 }}
          borderColor="black"
          borderRadius={{ a: 10 }}
          setValue={setRounding}
        />
      )}
      setDefaultValue={() => setRounding(defaultRounding)}
    />
  )
}