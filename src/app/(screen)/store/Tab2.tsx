import { Separator } from '@/components/ui/separator'
import { Share2Icon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Tab2() {
    return (
        <div className="flex flex-col gap-2 divide-y-8 divide-[#F7F7F7]">
            {Array.from({ length: 6 }).map((_, i) => (
                <div className="px-5 py-4 space-y-4" key={i}>
                    <Link href={`/change-password-after-entering`}>
                        <div className="w-full aspect-video rounded-xl bg-[#F7F7F7]" />
                    </Link>
                    <div className="flex items-start justify-between">
                        <div>
                            <h1 className="font-[500px] text-lg">
                                제목 텍스트 영역 입니다.
                            </h1>
                            <h2 className="text-sm text-muted-foreground">
                                내용 텍스트 영역입니다. 내용입니다.
                            </h2>
                        </div>
                        <Share2Icon className="text-[#ADADAD]" size={20} />
                    </div>
                </div>
            ))}
            <Separator className="h-2 bg-[#F7F7F7]" />
        </div>
    )
}
