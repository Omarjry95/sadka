import {Dispatch, SetStateAction} from "react";

type SelectedPictureDisplayBaseProps = {
    pictureUri: string,
    setNewPicture: Dispatch<SetStateAction<string | undefined>>
}

export default SelectedPictureDisplayBaseProps;