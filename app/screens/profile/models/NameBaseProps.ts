import { Dispatch, SetStateAction } from "react";

type NameBaseProps = {
    nameParts: string[],
    setNameParts: Dispatch<SetStateAction<string[]>>
}

export default NameBaseProps;