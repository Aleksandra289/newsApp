import CancelIcon from "../../icons/CancelIcon";
import ConfirmIcon from "../../icons/ConfirmIcon";
import ExclamationMarkIcon from "../../icons/ExclamationMarkIcon";
import { ThemeColor } from "../../shared/theme/theme";

export function getStatusIconColor (status: React.ComponentType) : [ThemeColor, ThemeColor]{
    switch (status){
        case ConfirmIcon: 
            return ['green', 'lighterGreen']
        case CancelIcon:
            return ['burgundy', 'lightPink']
        case ExclamationMarkIcon:
            return ['orange', 'lightOrange']
        default:
            throw new Error("Error occured. Unsupported status")
    }
}