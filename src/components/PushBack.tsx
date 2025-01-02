'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { Icons } from './ui/icons'
import { Separator } from './ui/separator'

export default function PushBack({ title }: { title?: string }) {
    const router = useRouter()
    const handlePushBack = () => {
        router.back()
    }
    return (
        <nav className="w-full flex flex-col gap-4 pt-4">
            <div className="w-full px-4 mx-auto flex justify-between items-center ">
                <div
                    onClick={handlePushBack}
                    className="flex items-center gap-4"
                >
                    <Icons.arrowLeft className="size-5 cursor-pointer" />
                    {title && (
                        <p className="text-lg text-[#4D4D4D] font-medium">
                            고객님의 정
                        </p>
                    )}
                </div>
            </div>
            <Separator />
        </nav>
    )
}
