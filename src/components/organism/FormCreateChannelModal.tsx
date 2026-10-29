import useCreateChannel from "../../hooks/channel/useCreateChannel";
import { Field, FieldLabel } from "../../lib/shadcn/ui/field";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../../lib/shadcn/ui/select";
import AppInputGroup from "../molecules/AppInputGroup";
import AppModal from "../molecules/AppModal";

interface IFormUserModal {
    isOpen: boolean,
    handleClose: () => void
}

export default function FormCreateChannelModal({isOpen, handleClose}: IFormUserModal) {
    const {handleChange, handleClose: onClose, handleSelect, handleSubmit, isLoading, form} = useCreateChannel()

    return <AppModal
        handleClose={() => {
            onClose()
            handleClose()
        }}
        isLoading={isLoading}
        isOpen={isOpen}
        onSubmit={handleSubmit}
        title="Tambah Channel"
    >
        <AppInputGroup
            label="Nama Channel"
            onChange={handleChange}
            placeholder="ex: zidaaaaanz"
            name="handleName"
            type="text"
            defaultValue=""
            value={form.handleName}
        />
        <Field className="max-w-full">
            <FieldLabel>Platform Channel</FieldLabel>
            <Select
                name="platform"
                onValueChange={(val) => handleSelect('platform', String(val))}
            >
                <SelectTrigger>
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="Youtube">
                            Youtube
                        </SelectItem>
                        <SelectItem value="Instagram">
                            Instagram
                        </SelectItem>
                        <SelectItem value="LinkedIn">
                            LinkedIn
                        </SelectItem>
                        <SelectItem value="Tiktok">
                            Tiktok
                        </SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </Field>
    </AppModal>
}