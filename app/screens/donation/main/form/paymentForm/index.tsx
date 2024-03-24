import React, {useMemo} from "react";
import {DefaultValueDisplay} from "@app/reusable/complex";
import {PaymentFormBaseProps} from "@app/screens/donation/models";
import BasePaymentForm from "@app/reusable/complex/paymentForm";
import Alternate from "@app/screens/donation/main/form/paymentForm/alternate";

export default function PaymentForm({ label, lastSetupCard, useLastCardSetup, setIsPaymentDataValid,
                                      setUseLastCardSetup }: PaymentFormBaseProps) {

  const alternateComponent = useMemo(
    () => lastSetupCard ?
      <Alternate lastSetupCard={lastSetupCard} label={label} /> :
      undefined,
    [lastSetupCard, label]);

  const main: JSX.Element = (
    <BasePaymentForm
      label={label}
      borderWidth={1}
      borderRadius={10}
      setIsPaymentDataValid={setIsPaymentDataValid}
    />
  );

  return (
    <DefaultValueDisplay
      autoDisabled={!!lastSetupCard}
      captionText="Votre dernière carte enregistrée"
      margin={{ b: 25 }}
      borderRadius={{ a: 10 }}
      mainComponent={main}
      alternateComponent={alternateComponent}
      setDefaultValue={() => setUseLastCardSetup(!useLastCardSetup)}
    />
  )
}