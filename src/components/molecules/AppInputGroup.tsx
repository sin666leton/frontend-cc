import { Field } from "../../lib/shadcn/ui/field";
import { Input } from "../../lib/shadcn/ui/input";
import { Label } from "../../lib/shadcn/ui/label";

interface IAppInputGroup {
    label: string,
    placeholder: string,
    name: string,
    type: "text" | "number" | "email" | "password"
    onChange: (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => void,
    value: string|number,
    defaultValue: string
}

export default function AppInputGroup({
    label,
    onChange,
    type,
    name,
    placeholder,
    value,
    defaultValue
}: IAppInputGroup) {
    return <Field className="max-w-full">
        <Label className="font-semibold tracking-wide" htmlFor={label}>{label}</Label>
            <Input
                className="neo-border text-sm"
                id={label}
                name={name}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                defaultValue={defaultValue}
            />
    </Field>
}