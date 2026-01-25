import { FieldValues, UseFormRegister } from "react-hook-form";

interface CheckboxProps {
    id: string;
    label: string;
    register?: UseFormRegister<FieldValues>;
}

const Checkbox = ({ id, label, register }: CheckboxProps) => {
    return (
        <div className="flex items-center gap-1">
            <input type="checkbox" {...(register ? register(id) : {})} />
            <label htmlFor={id} className="text-sm text-slate-500 my-2">{label}</label>
        </div>
    )
}

export default Checkbox