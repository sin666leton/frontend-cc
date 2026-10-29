import { Field, FieldLabel } from "../../lib/shadcn/ui/field";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../../lib/shadcn/ui/select";
import AppInputGroup from "../molecules/AppInputGroup";
import AppModal from "../molecules/AppModal";

export default function FormCreateChannelModal() {
    return <AppModal
        handleClose={() => {}}
        isLoading={false}
        isOpen={true}
        onSubmit={() => {}}
        title="Tambah Channel"
    >
        <AppInputGroup
            label="Nama Channel"
            onChange={() => {}}
            placeholder="ex: zidaaaaanz"
            name="name"
            type="text"
            defaultValue=""
            value=""
        />
        <Field className="max-w-full">
            <FieldLabel>Platform Channel</FieldLabel>
            <Select
                name="platform"
                // onValueChange={(val) => handleSelect('is_active', String(val))}
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