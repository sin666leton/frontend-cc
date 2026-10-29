import { Trash2 } from "lucide-react";

interface IButtonDelete {
    handleDelete: () => void
}

export default function ButtonDelete(value: IButtonDelete) {
    return <button
      onClick={value.handleDelete}
      title="Delete card"
      className="bg-white hover:bg-red-500 hover:text-white text-black p-2 rounded-xl border-[2.5px] border-black shadow-[3px_3px_0px_#000] hover:shadow-[4.5px_4.5px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#000] transition-all duration-150 flex items-center justify-center cursor-pointer"
      aria-label="Delete card"
    >
        <Trash2 className="w-4 h-4 stroke-[2.5]" />
    </button>
}