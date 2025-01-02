import React from 'react'
import PushBack from '@/components/PushBack'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Check, CircleCheck } from 'lucide-react'

const types = [
    { key: '상품 유형', value: '교보생활습관케어보험(무배당)[d]' },
    { key: '가입자', value: '홍길동' },
    { key: '보험기간', value: '3년' },
    { key: '보험료', value: '6,160원' },
]

export default function page() {
    return (
        <div className="pb-5 overflow-y-auto">
            <PushBack />
            <ScrollArea className="w-full min-h-[calc(100vh-3rem)] flex flex-col relative overflow-y-auto">
                <div className="py-5 px-5 flex flex-col justify-center items-center">
                    <div className="w-[50px] h-[50px] rounded-full bg-primary flex items-center justify-center">
                        <Check
                            size={30}
                            strokeWidth={4}
                            className="text-white"
                        />
                    </div>
                    <h2 className="text-base mt-0.5 font-medium">가입 성공</h2>
                </div>
                <h1 className="px-5 font-[700] text-lg my-2">가입 내용</h1>
                <div className="px-5">
                    <div className="grid grid-cols-[1.1fr,2.5fr] divide-y-2 border-y-4">
                        {types.map((type, index) => (
                            <React.Fragment key={index}>
                                <div className="bg-[#f0f0f1] h-[50px] p-1 py-2 w-full flex justify-center items-center text-base">
                                    {type.key}
                                </div>
                                <div className="w-full h-full flex py-2 justify-center items-center p-1 text-base">
                                    {type.value}
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                <div className=" mt-auto">
                    <div className="mt-6 text-gray-500 leading-relaxed px-5 space-y-2 py-1.5">
                        <p className="text-lg">가입이 완료되었습니다!</p>
                        <p className="text-base">
                            hyungjoo83 님, 교보생활습관케어보험(무배당)[D]
                            간편가입 신청이 완료 되었습니다. 자세한 보장내용과
                            보험가입 완료를 위해 전문 상담원이 연락드리겠습니다!
                        </p>
                    </div>
                </div>
                <div className="p-4 bg-white my-auto grow">
                    <Button className="w-full bg-primary text-white h-12">
                        D포인트로 간편 가입
                    </Button>
                </div>
            </ScrollArea>
            page
        </div>
    )
}
