import * as React from "react";
import {Text} from "@app/reusable";
import {BaseProps} from "@app/reusable/complex/drawerLabel/models";

const DrawerLabel = ({ label }: BaseProps) => (
    <Text
        variant="normal"
        value={label}
        color="black"
    />
);

export default DrawerLabel;