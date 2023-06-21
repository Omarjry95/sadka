import * as React from 'react';
import {useSelector} from "react-redux";
import {authSelector} from "@app/global/authSlice";
import Verified from "@app/navigation/restricted/verified";
import Unverified from "@app/navigation/restricted/unverified";

export default function Restricted() {

    const { isVerified } = useSelector(authSelector);

    return (
        isVerified ? <Verified /> : <Unverified />
    )
}