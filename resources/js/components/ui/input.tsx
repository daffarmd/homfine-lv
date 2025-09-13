import * as React from "react"
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';
import { useState } from 'react';
import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
  <div className="relative">
    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
      <Mail className="h-5 w-5" />
    </span>
    <input
      type={type}
      data-slot="input"
      className={cn(
        "w-full rounded-lg border border-gray-400 py-2 pr-4 pl-11 text-black focus:outline-none focus:ring-2 focus:ring-[#1F6B4A]",
        className
      )}
      {...props}
    />
  </div>
  )
}

function InputPassword({ className, ...props }: React.ComponentProps<"input">) {
  const [showPassword, setShowPassword] = useState(false);

  return (
  <div className="relative">
    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
      <Lock className="h-5 w-5" />
    </span>
    <input
      type={showPassword ? "text" : "password"}
      data-slot="input"
      className={cn(
        "w-full rounded-lg border border-gray-400 bg-white/80 py-2 pr-4 pl-11 text-black focus:outline-none focus:ring-2 focus:ring-[#1F6B4A]",
        className
      )}
      {...props}
    />
    <button
        type="button"
        tabIndex={-1}
        className="absolute inset-y-0 right-0 flex items-center pr-3 text-[#1F6B4A] hover:text-[#1F6B4A]"
        onClick={() => setShowPassword((v) => !v)}
    >
        {showPassword ? <Eye className="h-5 w-5" /> : <EyeOff className="h-5 w-5" />}
    </button>
    
  </div>
  )
}

export { Input, InputPassword }