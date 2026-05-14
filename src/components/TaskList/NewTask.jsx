import React from 'react'
import { PlayCircle, Sparkles } from 'lucide-react'

const NewTask = ({ data, onAccept }) => {
  return (
    <div className="shrink-0 w-[320px] p-6 rounded-2xl bg-white border border-[#dbeafe] flex flex-col gap-3 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
      
      {/* Top */}
      <div className="flex justify-between items-center">
        
        {/* Category */}
        <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-[#387ED1]/10 text-[#387ED1]">
          {data.category || 'General'}
        </span>

        {/* Date */}
        <span className="text-xs text-gray-400 font-medium">
          {data.taskDate}
        </span>
      </div>

      {/* Status */}
      <div className="flex items-center gap-2 text-xs font-semibold text-[#387ED1]">
        <Sparkles size={15} />
        <span>New Task</span>
      </div>

      {/* Title */}
      <h3 className="text-[20px] font-bold leading-tight text-gray-800">
        {data.taskTitle}
      </h3>

      {/* Description */}
      <p className="text-[14px] text-gray-500 leading-relaxed flex-1">
        {data.taskDescription}
      </p>

      {/* Button */}
      <div className="mt-3">
        <button
          onClick={onAccept}
          className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-[14px] font-semibold bg-[#387ED1] text-white cursor-pointer transition-all hover:bg-[#2f6db7] active:scale-[0.97]"
        >
          <PlayCircle size={18} />
          <span>Accept Task</span>
        </button>
      </div>
    </div>
  )
}

export default NewTask