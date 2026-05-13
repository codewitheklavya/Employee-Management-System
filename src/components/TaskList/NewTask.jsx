import React from 'react'
import { PlayCircle, Sparkles } from 'lucide-react'

const NewTask = ({ data, onAccept }) => {
    return (
        <div className="shrink-0 w-[290px] p-5 rounded-[14px] bg-[#1a1a2e] border border-white/[0.06] border-l-[3px] border-l-blue-400 flex flex-col gap-2.5 transition-all hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)]">
            <div className="flex justify-between items-center">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-violet-500/15 text-violet-400">{data.category || 'General'}</span>
                <span className="text-xs text-[#5a5a72]">{data.taskDate}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-400">
                <Sparkles size={14} />
                <span>New</span>
            </div>
            <h3 className="text-[17px] font-semibold leading-tight text-white">{data.taskTitle}</h3>
            <p className="text-[13px] text-[#8b8ba3] leading-relaxed flex-1">{data.taskDescription}</p>
            <div className="mt-2">
                <button onClick={onAccept}
                    className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-[13px] font-medium bg-blue-500/15 text-blue-400 border border-blue-500/25 cursor-pointer transition-all hover:bg-blue-500/25 active:scale-[0.96]">
                    <PlayCircle size={16} />
                    <span>Accept Task</span>
                </button>
            </div>
        </div>
    )
}

export default NewTask
