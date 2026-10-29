import { AlertTriangle, Trash2 } from "lucide-react";

interface IDeleteConfirmation {
    name: string
}

export default function DeleteConfirmation(value: IDeleteConfirmation) {
    return <div className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
        <div className="bg-white border-[3.5px] border-black shadow-[8px_8px_0px_#000] rounded-2xl p-6 sm:p-8 max-w-sm w-full relative animate-in fade-in zoom-in-95 duration-200">
            <div className="flex flex-col items-center text-center">
                {/* Icon Alert */}
                <div className="bg-[#fde047] border-[3px] border-black shadow-[3px_3px_0px_#000] p-3 rounded-2xl mb-4">
                <   AlertTriangle className="w-8 h-8 text-black stroke-[2.5]" />
                </div>
                <h3 className="text-2xl font-black uppercase font-mono mb-2">Delete Channel?</h3>
                <p className="font-medium text-slate-700 text-sm mb-6">
                Are you sure you want to delete <span className="font-black text-black font-mono bg-amber-100 px-1 py-0.5 rounded border border-black">{value.name}</span> PlatformName?
                </p>
                {/* Action Buttons */}
                <div className="flex gap-3 w-full">
                <button
                    type="button"
                    // onClick={() => setCardToDelete(null)}
                    className="w-1/2 bg-gray-200 hover:bg-gray-300 text-black border-[3px] border-black shadow-[4px_4px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_#000] font-extrabold py-2.5 rounded-xl transition-all cursor-pointer"
                >
                    Cancel
                </button>
                <button
                    type="button"
                    // onClick={handleConfirmDelete}
                    className="w-1/2 bg-[#ef4444] hover:bg-[#dc2626] text-white border-[3px] border-black shadow-[4px_4px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_#000] font-extrabold py-2.5 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                    <Trash2 className="w-4 h-4 stroke-[2.5]" />
                    Delete
                </button>
                </div>
            </div>
        </div>
    </div>
}