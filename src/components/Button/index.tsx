import { iButton } from "../../interfaces/button.interface"

export const Button = ({content, style, type}: iButton): JSX.Element => {
    return (
        <button className={style} type={type}>{content}</button>
    )
}