import { Sparkles } from "lucide-react";

interface IToast {
    message: string
}

export default function Toast(value: IToast) {
    return <div className="fixed bottom-6 right-6 bg-[#f43f5e] text-white border-[3.5px] border-black shadow-[5px_5px_0px_#000] px-5 py-3 rounded-xl font-bold flex items-center gap-3 z-50 animate-in slide-in-from-bottom-5 duration-200">
        <Sparkles className="w-5 h-5 stroke-[2.5]" />
        <span>{value.message}</span>
    </div>
}