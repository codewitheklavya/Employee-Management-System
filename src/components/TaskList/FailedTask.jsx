import React from 'react'
import { XCircle } from 'lucide-react'

const FailedTask = ({ data }) => {
  return (
    <div className="shrink-0 w-[320px] p-6 rounded-2xl bg-white border border-red-200 flex flex-col gap-3 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
      
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
      <div className="flex items-center gap-2 text-xs font-semibold text-red-500">
        <XCircle size={15} />
        <span>Failed</span>
      </div>

      {/* Title */}
      <h3 className="text-[20px] font-bold leading-tight text-gray-800">
        {data.taskTitle}
      </h3>

      {/* Description */}
      <p className="text-[14px] text-gray-500 leading-relaxed flex-1">
        {data.taskDescription}
      </p>

      {/* Failed Banner */}
      <div className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-red-500 text-white text-[14px] font-semibold mt-3">
        <XCircle size={18} />
        <span>Task Failed</span>
      </div>
    </div>
  )
}

export default FailedTask