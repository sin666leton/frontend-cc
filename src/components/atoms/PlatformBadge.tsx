interface IPlatformBadge {
    name: string
}

export default function PlatformBadge(attributes: IPlatformBadge) {
    return <div className="flex items-center gap-2 bg-white border-2 border-black px-3 py-1.5 rounded-xl shadow-[2px_2px_0px_#000]">
        {/* <IconComponent className="w-5 h-5 text-black stroke-[2.2]" /> */}
        <span className="text-xs font-black uppercase tracking-wider text-black">
            {attributes.name}
        </span>
    </div>
}