import {WsListSelectBaseProps} from "@app/api/models";
import {getDownloadURL, getStorage, ref} from "firebase/storage";

export const getPhotoUrl = async (list: WsListSelectBaseProps[]) => {
  for (let index = 0; index < list.length; index++) {

    let { photo } = list[index];

    if (photo) {
      photo = await getDownloadURL(ref(getStorage(), photo));

      list[index] = {
        ...list[index],
        photo
      }
    }
  }

  return list;
}