import {store} from "@app/redux/store";

type RootState = ReturnType<typeof store.getState>;

export default RootState;