"use client"

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
    id: string;
    placeholder: string;
    disabled?: boolean;
    type?: string;
    required?: boolean;
    register?: UseFormRegister<FieldValues>;
    errors?: FieldErrors;
}

const Input = ({ id, placeholder, disabled, type, required, register, errors }: InputProps) => {

    return (
        <input className={`w-full h-12 p-3 rounded-md outline-none my-1.5 ${errors && errors[id] ? "border border-red-500" : "border border-slate-300"}`} id={id} placeholder={placeholder} disabled={disabled} type={type} {...(register ? register(id, { required }) : {})} />
    )
}

export default Input