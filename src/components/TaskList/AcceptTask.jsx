import React from 'react'
import { CheckCircle, XCircle, Zap } from 'lucide-react'

const AcceptTask = ({ data, onComplete, onFail }) => {
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
      <div className="flex items-center gap-2 text-xs font-semibold text-amber-500">
        <Zap size={15} />
        <span>Active Task</span>
      </div>

      {/* Title */}
      <h3 className="text-[20px] font-bold leading-tight text-gray-800">
        {data.taskTitle}
      </h3>

      {/* Description */}
      <p className="text-[14px] text-gray-500 leading-relaxed flex-1">
        {data.taskDescription}
      </p>

      {/* Buttons */}
      <div className="flex gap-3 mt-3">
        
        {/* Complete Button */}
        <button
          onClick={onComplete}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-[14px] font-semibold bg-[#387ED1] text-white cursor-pointer transition-all hover:bg-[#2f6db7] active:scale-[0.97]"
        >
          <CheckCircle size={18} />
          <span>Complete</span>
        </button>

        {/* Failed Button */}
        <button
          onClick={onFail}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-[14px] font-semibold bg-red-500 text-white cursor-pointer transition-all hover:bg-red-600 active:scale-[0.97]"
        >
          <XCircle size={18} />
          <span>Failed</span>
        </button>
      </div>
    </div>
  )
}

export default AcceptTask