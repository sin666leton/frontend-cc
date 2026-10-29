import ButtonDelete from "../atoms/ButtonDelete";
import PlatformBadge from "../atoms/PlatformBadge";

interface IChannelCard {
    cardColor: string,
    platform: string,
    name: string
}

export default function ChannelCard(channel: IChannelCard) {
    return <div
        className={`border-[3.5px] border-black rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden group shadow-[5px_5px_0px_#000] hover:shadow-[8px_8px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-250 ease-out transform-gpu ${
            // isDeleting
            // ? 'opacity-0 scale-50 rotate-6 translate-y-6 pointer-events-none transition-all duration-300'
            // : 'opacity-100 scale-100 translate-y-0'
            'opacity-100 scale-100 translate-y-0'
      }`}
      style={{ backgroundColor: channel.cardColor }}
    >
      {/* Top Bar: Badge & Delete Button */}
        <div className="flex justify-between items-start mb-6 z-10">
            <PlatformBadge
                name={channel.platform}
            />
            <ButtonDelete
                handleDelete={() => {}}
            />
      </div>
      {/* Card Content: Channel Name */}
      <div className="my-2 z-10">
        <span className="text-[11px] font-black uppercase tracking-widest text-black/60">
          Nama Channel
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-black leading-tight break-words font-mono mt-0.5">
          {channel.name}
        </h2>
      </div>
      {/* Bottom Accent Bar */}
      <div className="w-full h-2.5 bg-black rounded-full mt-4 opacity-15 group-hover:opacity-30 transition-opacity" />
    </div>
}