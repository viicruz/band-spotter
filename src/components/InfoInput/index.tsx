"use client";


import { forwardRef } from "react";
import type { Icon } from "@phosphor-icons/react";
import type { InputHTMLAttributes } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

//extends input
interface Props extends InputHTMLAttributes<HTMLInputElement> {
  icon: Icon
  label: string
  id: string
  error?: string
}


export const InfoInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const animateRef = useAutoAnimate()[0];

  const Icon = props.icon;

  return (
    <div className='flex flex-col w-full'>
      <label className='pb-1 text-base font-bold text-black' htmlFor={props.id}>
        {props.label}
      </label>
      <div className="flex flex-row items-center justify-center gap-3 p-3 border-2 border-black rounded-lg text-blackbg-red-800">
        <Icon className="text-base text-neutral-600" />
        <input
          className="w-full h-full px-2 text-base text-black placeholder-opacity-50 bg-transparent outline-none placeholder:text-neutral-600"
          placeholder={props.label}
          type="text"
          ref={ref}
          {...props}
        />
      </div>
      <div ref={animateRef}>
        {props.error && (
          <span className='text-red-500 text-xs'>
            {props.error}
          </span>
        )}
      </div>
    </div>
  );
}
)
