import Image from 'next/image'
import React from 'react'
import { Icons } from '@/components/ui/icons'
import Link from 'next/link'

export default function Card() {
    return (
        <div className="bg-white pt-[20px] px-[20px]">
            <Link href='/change-password-after-entering'>
            <div className="relative rounded-[5px] overflow-hidden">
                {/* <Image
                    src="/images/logo3.png"
                    alt="logo"
                    width={100}
                    height={100}
                    /> */}
                <div className="bg-gray-200 h-[207px]"></div>
            </div>
                    </Link>
            <div className="py-[5px] pb-[10px]">
                <div className="flex justify-between w-full my-[7px]">
                    <p className="text-base">제목 텍스트 영역 입니다.</p>
                    <p>
                        <Icons.share />{' '}
                    </p>
                </div>
                <p className="text-[12px] text-[#ADADAD]">
                    내용 텍스트 영역입니다. 내용입니다.
                </p>
            </div>
        </div>
    )
}
