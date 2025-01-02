'use client'
import { Check } from 'lucide-react'
import React, { useState } from 'react'

export default function Questions({
    index,
    question,
}: {
    index: number
    question: string
}) {
    const [selected, setSelected] = useState<boolean | null>()

    const handleClick = (val: boolean) => {
        if (val === selected) {
            setSelected(null)
        } else {
            setSelected(val)
        }
    }

    return (
        <div className="">
            <p className="text-[#4D4D4D] text-base">
                {index}. {question}
            </p>
            <div className="grid grid-cols-2 pt-2 gap-6 px-1">
                <div
                    className={`flex border items-center justify-center rounded-lg h-[46px]  p-2 ${
                        selected
                            ? 'border-2 border-primary bg-primary/20 opacity-60 text-gray-800'
                            : 'bg-white/80 text-gray-400'
                    }`}
                    onClick={() => handleClick(true)}
                >
                    아니오{' '}
                    <div
                        className={`ml-2 w-5 h-5 rounded-full border flex items-center justify-center ${
                            selected ? 'bg-primary' : ''
                        }`}
                    >
                        {selected ? <Check className="text-white" /> : ''}
                    </div>
                </div>
                <div
                    className={`flex border items-center justify-center rounded-lg  p-2 ${
                        selected === false
                            ? 'border-2 border-primary bg-primary/20 opacity-60 text-gray-800'
                            : 'bg-white/80 text-gray-400'
                    }`}
                    onClick={() => handleClick(false)}
                >
                    예{' '}
                    <div
                        className={`ml-2 w-5 h-5 rounded-full border flex items-center justify-center ${
                            selected === false ? 'bg-primary' : ''
                        }`}
                    >
                        {selected === false ? (
                            <Check className="text-white p-[1px]" />
                        ) : (
                            ''
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
