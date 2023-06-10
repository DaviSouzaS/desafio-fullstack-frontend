import { iInput } from "../../interfaces/input.interface"

export const Input = ({id, boxStyle, inputStyle, inputType, placeholder, labelContent, register}: iInput): JSX.Element => {
    return (
        <div>
            <label htmlFor={id}>{labelContent}</label>
            <div className={boxStyle}>
                <input id={id} className={inputStyle} type={inputType} placeholder={placeholder} {...register(id)}/>
            </div>
        </div>
    )
}