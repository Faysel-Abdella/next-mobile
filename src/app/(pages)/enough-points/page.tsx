'use client'
import {
    CustomDrawer,
    CustomDrawerContent,
    CustomDrawerTrigger,
} from '@/components/custom-drawer'
import PushBack from '@/components/PushBack'
import { Button } from '@/components/ui/button'
import { Icons } from '@/components/ui/icons'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { X } from 'lucide-react'
import React, { useState } from 'react'

const types = [
    { key: '상품 유형', value: '교보생활습관케어보험(무배당)[D]' },
    { key: '가입자', value: '홍길동' },
    { key: '보험기간', value: '3년' },
    { key: '보험료', value: '6,160원' },
]

const balance = [
    { key: '보유 포인트', value: 160 },
    { key: '부족한 포인트', value: 6000 },
]

export default function Page() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    return (
        <div className="pb-5 overflow-y-auto">
            <CustomDrawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
                <PushBack />

                <div className="flex flex-col h-[calc(100vh-3rem)] overflow-y-auto scrollbar-hide">
                    <div className="flex-grow">
                        <div className="py-5 px-5">
                            <p className="text-[#4D4D4D] font-[500] text-xl">
                                보험 가입에 중요한 정보입니다.
                            </p>
                            <p className="text-[#4D4D4D] font-[700] text-xl">
                                꼭 확인해주세요!
                            </p>
                        </div>
                        <div className="px-5">
                            <div className="grid grid-cols-[1.1fr,2.5fr] divide-y-2 border-y-4">
                                {types.map((type, index) => (
                                    <React.Fragment key={index}>
                                        <div className="bg-[#f0f0f1] h-full p-1 py-2 w-full flex justify-center items-center text-base">
                                            {type.key}
                                        </div>
                                        <div className="w-full min-h-[50px] flex py-2 justify-center items-center p-1 text-base">
                                            {type.value}
                                        </div>
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                        <div className="py-2 mt-6 px-5">
                            <Label className="text-[#4D4D4D] font-[300] text-base mt-8">
                                D포인트(보유 50000p)
                            </Label>
                            <div className="flex items-center h-10 gap-2">
                                <Input className="w-full h-10 mt-2 p-0 px-2 text-base outline-none" />
                                <Button className="w-1/3 h-10 mt-2 p-0 bg-primary/10 text-primary text-sm">
                                    전액 사용
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-auto">
                        <div className="w-full flex justify-between items-center mt-12 px-5">
                            <p className="font-semibold text-base">
                                납입 보험료
                            </p>
                            <p className="font-[500] text-xl text-primary">
                                0 원
                            </p>
                        </div>
                        <div className="bg-[#F5F5F5]">
                            <div className="mt-6 text-sm text-gray-500 leading-relaxed px-5 space-y-2 py-1.5">
                                <p>간편가입 상담 안내</p>
                                <p className="text-xs">
                                    해당 보험은 간편가입 상담을 통해 설명드리고,
                                    최종 가입이 완료됩니다. 전화 상담이 진행되지
                                    않으면 가입이 불가하니 꼭 전화를 받아주세요.
                                    간편가입 신청 후 2~3일 이내 간편가입 상담을
                                    진행합니다.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-4 bg-white">
                        <CustomDrawerTrigger asChild>
                            <Button className="w-full bg-primary text-white h-12">
                                D포인트로 간편 가입
                            </Button>
                        </CustomDrawerTrigger>
                    </div>
                </div>
                <CustomDrawerContent className="relative px-5 py-8  flex flex-col gap-4 font-medium">
                    <div
                        onClick={() => setIsDrawerOpen(false)}
                        className="hover:cursor-pointer absolute top-4 right-5 opacity-35 size-6 bg-transparent text-black border-0"
                    >
                        <X />
                    </div>
                    <div className="mt-5 flex items-center w-full justify-between">
                        <div className="flex flex-col">
                            <p className="text-[13px] opacity-85">
                                [교보생활습관케어보험(무배당)[D]]
                            </p>
                            <p className="font-[700] text-base">보험료</p>
                        </div>
                        <div className="flex gap-1 justify-center items-center">
                            <Icons.currency
                                fill={'#F5A227'}
                                className="size-6"
                            />
                            <div className="text-lg">6160P</div>
                        </div>
                    </div>

                    <Separator className="bg-[#F5F5F5]" />
                    {balance.map((bal, index) => (
                        <div
                            key={index}
                            className="flex items-center w-full justify-between"
                        >
                            <p className="text-md">{bal.key}</p>
                            <div className="flex gap-1 justify-center items-center">
                                <Icons.currency
                                    fill={'#F5A227'}
                                    className="size-6"
                                />
                                <div className="text-lg">{bal.value}P</div>
                            </div>
                        </div>
                    ))}

                    <div className="flex w-full gap-2.5 font-medium">
                        <Button
                            onClick={() => setIsDrawerOpen(false)}
                            className="w-1/3 h-11 bg-primary/10 text-primary"
                        >
                            취소
                        </Button>
                        <Button className="bg-primary text-white w-2/3 h-11">
                            포인트 모으러 가기
                        </Button>
                    </div>
                </CustomDrawerContent>
            </CustomDrawer>
        </div>
    )
}
