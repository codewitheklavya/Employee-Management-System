import React from 'react'
import { CheckCircle2 } from 'lucide-react'

const CompleteTask = ({ data }) => {
    return (
        <div className="shrink-0 w-[290px] p-5 rounded-[14px] bg-[#1a1a2e] border border-white/[0.06] border-l-[3px] border-l-emerald-400 flex flex-col gap-2.5 transition-all hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)]">
            <div className="flex justify-between items-center">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-violet-500/15 text-violet-400">{data.category || 'General'}</span>
                <span className="text-xs text-[#5a5a72]">{data.taskDate}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                <CheckCircle2 size={14} />
                <span>Completed</span>
            </div>
            <h3 className="text-[17px] font-semibold leading-tight text-white">{data.taskTitle}</h3>
            <p className="text-[13px] text-[#8b8ba3] leading-relaxed flex-1">{data.taskDescription}</p>
            <div className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-emerald-500/10 text-emerald-400 text-[13px] font-medium mt-2">
                <CheckCircle2 size={18} />
                <span>Task Completed</span>
            </div>
        </div>
    )
}

export default CompleteTask
