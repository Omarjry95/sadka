import React, {useEffect, useMemo} from "react";
import {DefaultValueDisplay} from "@app/reusable/complex";
import {PaymentFormBaseProps} from "@app/screens/spontaneous/models";
import BasePaymentForm from "@app/reusable/complex/paymentForm";
import Alternate from "@app/screens/spontaneous/main/form/paymentForm/alternate";

export default function PaymentForm({ label, lastSetupCard, useLastCardSetup, setIsPaymentDataValid,
                                      setUseLastCardSetup }: PaymentFormBaseProps) {

  const alternateComponent = useMemo(
    () => lastSetupCard ?
      () => (<Alternate lastSetupCard={lastSetupCard} label={label} />) :
      undefined,
    [lastSetupCard]);

  return (
    <DefaultValueDisplay
      autoDisabled={!!lastSetupCard}
      captionText="Votre dernière carte enregistrée"
      margin={{ b: 25 }}
      borderRadius={{ a: 10 }}
      mainComponent={() => (
        <BasePaymentForm
          label={label}
          borderWidth={1}
          borderRadius={10}
          setIsPaymentDataValid={setIsPaymentDataValid}
        />
      )}
      alternateComponent={alternateComponent}
      setDefaultValue={() => setUseLastCardSetup(!useLastCardSetup)}
    />
  )
}