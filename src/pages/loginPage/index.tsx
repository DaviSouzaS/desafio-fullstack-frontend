import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { iLogin } from "../../interfaces/login.interface";
import { loginSchema } from "../../schemas/login.schema";

export const LoginPage = (): JSX.Element => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<iLogin>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit: SubmitHandler<iLogin> = (data) => console.log(data);

    return (
    <main>
        <h1>Fazer login</h1>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Input id="email" inputType="email" labelContent="Email" placeholder="Digite seu email aqui..." register={register}/> 
            {errors.email && (<p>{errors.email.message}</p>)}

            <Input id="password" inputType="password" labelContent="Senha" placeholder="Digite sua senha aqui..." register={register}/>
            {errors.password && (<p>{errors.password.message}</p>)}

            <Button content="Entrar" type="submit"/>
        </form>
    </main>
    )
}