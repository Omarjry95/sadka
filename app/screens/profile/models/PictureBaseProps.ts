import { Dispatch, SetStateAction } from "react";

type PictureBaseProps = {
    pictureUri?: string,
    setNewPicture: Dispatch<SetStateAction<string | undefined>>
}

export default PictureBaseProps;