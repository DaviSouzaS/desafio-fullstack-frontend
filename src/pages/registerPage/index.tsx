import { Input } from "../../components/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { iRegister } from "../../interfaces/register.interface";
import { registerSchema } from "../../schemas/register.schema";

export const RegisterPage = (): JSX.Element => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<iRegister>({
        resolver: zodResolver(registerSchema),
    });

    const onSubmit: SubmitHandler<iRegister> = (data) => console.log(data);

    return (
    <div>
        <h1>Cadastre-se</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input id="name" inputType="text" labelContent="Nome" placeholder="Digite seu nome aqui..." register={register} />
            {errors.name && (<p>{errors.name.message}</p>)}

            <Input id="email" inputType="email" labelContent="Email" placeholder="Digite seu email aqui..." register={register}/>
            {errors.email && (<p>{errors.email.message}</p>)}

            <Input id="password" inputType="password" labelContent="Senha" placeholder="Digite sua senha aqui..." register={register}/>
            {errors.password && (<p>{errors.password.message}</p>)}
            
            <Input id="confirmPassword" inputType="password" labelContent="Confirmar senha" placeholder="Digite novamente sua senha..." register={register}/>
            {errors.confirmPassword && (<p>{errors.confirmPassword.message}</p>)}

            <Input id="phone" inputType="tel" labelContent="Telefone" placeholder="Digite seu telefone (com DDD)..." register={register}/>
            {errors.phone && (<p>{errors.phone.message}</p>)}

            <button>Registrar</button>
        </form>
    </div>
    )
}