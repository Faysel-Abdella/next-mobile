import { Button } from '@/components/ui/button'
import { Icons } from '@/components/ui/icons'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import React from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import PushBack from '@/components/PushBack'

export default function Page() {
    return (
        <div className="relative">
            <PushBack />
            <div className="w-[390px] p-5 mx-auto">
                <h1 className="text-xl text-[#4D4D4D] font-[500] mb-6">
                    고객님의 정보를 확인해주세요
                </h1>
                <form className="space-y-5">
                    <div className="space-y-2">
                        <Label
                            htmlFor="name"
                            className="text-base text-[#4D4D4D]"
                        >
                            이름
                        </Label>
                        <Input
                            id="name"
                            placeholder="홍길동"
                            className="h-9 rounded-md"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label
                            htmlFor="phone"
                            className="text-base text-[#4D4D4D]"
                        >
                            휴대폰 번호
                        </Label>
                        <Input
                            id="phone"
                            type="tel"
                            placeholder="01012345678"
                            pattern="[0-9]*"
                            className="h-9 rounded-md"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label
                            htmlFor="registration"
                            className="text-base text-[#4D4D4D]"
                        >
                            주민등록번호(외국인등록번호)
                        </Label>
                        <div className="flex gap-2 items-center">
                            <Input
                                // type='number'
                                id="registration-first"
                                placeholder="800702"
                                maxLength={6}
                                className="h-9 rounded-md"
                            />
                            <span className="text-gray-400">-</span>
                            <Input
                                id="registration-second"
                                type="password"
                                placeholder="●●●●●●●"
                                maxLength={7}
                                className="h-9 rounded-md"
                            />
                        </div>
                        <Link
                            href="#"
                            className="text-[#FF6B00] text-[10px] mt-2 block"
                        >
                            주민등록 정보확인이 필요해요
                        </Link>
                    </div>
                    <div className="flex w-full justify-center">
                        <Button className="fixed w-full max-w-[354px] max-h-11 bottom-4 mx-4 py-6 text-lg">
                            다음
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
