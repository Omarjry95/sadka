import {EmitterSubscription, Keyboard, KeyboardEventListener} from "react-native";

export const onShowKeyboard: (callback: KeyboardEventListener) => EmitterSubscription = (callback: KeyboardEventListener) => {
    return Keyboard.addListener("keyboardDidShow", callback);
}

export const onHideKeyboard: (callback: KeyboardEventListener) => EmitterSubscription = (callback: KeyboardEventListener) => {
    return Keyboard.addListener("keyboardDidHide", callback);
}

export const removeKeyboardListeners = (listeners: EmitterSubscription[]) => {
    listeners.forEach(listener => listener.remove());
}