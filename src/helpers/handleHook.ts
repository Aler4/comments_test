import {useCallback} from "react";
import {User} from "../types";

export const useHandleHook = (depend: any, dispatcher: any,action:any) => {
    return useCallback((data: User) => {
        dispatcher(action(data));
    },[depend])
}
