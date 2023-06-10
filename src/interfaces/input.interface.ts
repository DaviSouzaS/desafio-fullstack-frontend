import { iLogin } from "./login.interface";
import { iRegister } from "./register.interface";
import { UseFormRegister } from "react-hook-form";

export interface iInput  {
    id: "email" | "password" | "confirmPassword" | "name" | "phone"
    boxStyle?: string 
    inputStyle?: string
    inputType:string
    placeholder: string
    labelContent: string
    register: UseFormRegister<iLogin> | UseFormRegister<iRegister> | any
    // REMOVER ANY
}
