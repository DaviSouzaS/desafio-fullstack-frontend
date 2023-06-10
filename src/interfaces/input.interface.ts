import { iLogin } from "./login.interface";
import { UseFormRegister } from "react-hook-form";

export interface iInput  {
    id: "email" | "password"
    boxStyle?: string 
    inputStyle?: string
    inputType:string
    placeholder: string
    labelContent: string
    register: UseFormRegister<iLogin>
}