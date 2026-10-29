import { PlusIcon } from "lucide-react";
import usePaginateChannel from "../../hooks/channel/usePaginateChannel"
import { Card, CardContent, CardFooter, CardHeader } from "../../lib/shadcn/ui/card"
import FormCreateChannelModal from "./FormCreateChannelModal";
import { useState } from "react";

export default function ChannelTable() {
    const {data, setPage} = usePaginateChannel(1)
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <>
            <Card className="bg-white neo-shadow">
                <CardHeader className="justify-end">
                    <button
                        onClick={() => setIsOpen(true)}
                        className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold neo-btn active:translate-x-1 active:translate-y-1 active:shadow-none neo-shadow-right neo-primary"
                    >
                        <PlusIcon size={22}/>
                        Tambah Channel
                    </button>
                </CardHeader>
                <CardContent className="px-1">
                    {data && (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-50/75 border-b border-slate-200 text-slate-500 font-semibold text-xs uppercase tracking-wider">
                                        <th className="py-4 px-6">Nama Channel</th>
                                        <th className="py-4 px-6">Platform</th>
                                        <th className="py-4 px-6 text-right">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 text-sm">
                                    {data.data.map((item, index) => (
                                        <tr 
                                            key={index} 
                                            className="hover:bg-slate-50/80 transition-colors duration-150"
                                        >
                                            <td className="py-4 px-6 font-medium text-slate-800">
                                                {item.handleName}
                                            </td>
                                            <td className="py-4 px-6">
                                                <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium tracking-wide ${
                                                    item.platform === 'YouTube' ? 'bg-red-50 text-red-700 border border-red-200/60' :
                                                    item.platform === 'Discord' ? 'bg-indigo-50 text-indigo-700 border border-indigo-200/60' :
                                                    item.platform === 'Instagram' ? 'bg-pink-50 text-pink-700 border border-pink-200/60' :
                                                    'bg-sky-50 text-sky-700 border border-sky-200/60'
                                                }`}>
                                                {item.platform}
                                                </span>
                                            </td>
                                            <td className="py-4 px-6 text-right">
                                                <div className="flex justify-end gap-2">
                                                    <button className="px-3 py-1.5 text-xs font-medium text-red-600 bg-white border border-red-200 rounded-lg hover:bg-red-50 transition-all shadow-2xs">
                                                        Hapus
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </CardContent>
                <CardFooter className="justify-center">
                    <div className="px-6 py-4 border-t border-slate-100 bg-white flex justify-center items-center">
                        {data && <div className="flex items-center gap-1.5">
                            {/* Tombol Previous */}
                            <button
                                onClick={() => setPage((old) => Math.max(old - 1, 1))}
                                disabled={data.metadata.isFirstPage}
                                className="cursor-pointer px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                            >
                                Prev
                            </button>
                            {/* Render Tombol Nomor Halaman [1, 2, 3] langsung dari meta.pagesArray */}
                            {data.metadata.pages.map((pageNum: number) => {
                                const isActive = pageNum === data.metadata.currentPage;
                                
                                return (
                                    <button
                                        key={pageNum}
                                        onClick={() => setPage(pageNum)}
                                        className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${
                                            isActive
                                            ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                                            : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100 cursor-pointer'
                                        }`}
                                    >
                                        {pageNum}
                                    </button>
                                );
                            })}
                            {/* Tombol Next */}
                            <button
                                onClick={() => setPage((old) => old + 1)}
                                disabled={data.metadata.currentPage === data.metadata.pageCount || data.metadata.pageCount === 0}
                                className="cursor-pointer px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                            >
                                Next
                            </button>
                        </div>}
                    </div>
                </CardFooter>
            </Card>
            <FormCreateChannelModal
                isOpen={isOpen}
                handleClose={() => setIsOpen(false)}
            />
        </>
    )
}