import CancelIcon from "../../icons/CancelIcon";
import ConfirmIcon from "../../icons/ConfirmIcon";
import ExclamationMarkIcon from "../../icons/ExclamationMarkIcon";
import { ThemeColor } from "../../shared/theme/theme";
import {StatusProps } from "./CircleIcon";




export function getStatusIconColor (status: StatusProps) : [React.ComponentType, ThemeColor, ThemeColor]{
    switch (status){
        case 'success': 
            return [ConfirmIcon, 'green', 'lighterGreen']
        case 'error':
            return [CancelIcon, 'burgundy', 'lightPink']
        case 'warning':
            return [ExclamationMarkIcon, 'orange', 'lightOrange']
        default:
            throw new Error("Error occured. Unsupported status")
    }
}