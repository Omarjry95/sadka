import React from "react";
import {euroSymbol} from "@app/utilities/regex";
import {Text} from "@app/reusable";

const Total = () => (
  <Text
    margin={{ r: 15 }}
    color="black"
    value={`0${euroSymbol}`}
  />
)

export default Total;