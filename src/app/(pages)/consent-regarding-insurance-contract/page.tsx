import React from 'react'
import PushBack from '@/components/PushBack'
import CheckBox from './CheckBox'
import { Button } from '@/components/ui/button'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Accordion } from '@/components/ui/accordion'

interface ConsentSection {
    id: string
    label: string
    children?: { id: string; label: string }[]
}

const consentSections: ConsentSection[] = [
    {
        id: 'consent1',
        label: '보험금 지급 심사를 위한 동의',
        children: [
            { id: 'consent1-1', label: '개인(신용) 정보의 수집·이용 동의' },
            { id: 'consent1-2', label: '개인(신용) 정보의 조회 동의' },
            { id: 'consent1-3', label: '개인(신용) 정보의 조회 동의' },
            { id: 'consent1-4', label: '개인(신용) 정보의 조회 동의' },
        ],
    },
    {
        id: 'consent2',
        label: '보험금 지급 심사를 위한 동의',
        children: [
            { id: 'consent2-1', label: '개인(신용) 정보의 제공 동의' },
            { id: 'consent2-2', label: '민감정보 처리 동의' },
            { id: 'consent2-3', label: '민감정보 처리 동의' },
        ],
    },
    {
        id: 'consent3',
        label: '보험금 지급 심사를 위한 동의',
        children: [
            { id: 'consent3-1', label: '개인(신용) 정보의 수집·이용 동의' },
            { id: 'consent3-2', label: '개인(신용) 정보의 조회 동의' },
            { id: 'consent3-3', label: '개인(신용) 정보의 조회 동의' },
            { id: 'consent3-4', label: '개인(신용) 정보의 조회 동의' },
        ],
    },
    {
        id: 'consent4',
        label: '보험금 지급 심사를 위한 동의',
        children: [
            { id: 'consent3-1', label: '개인(신용) 정보의 제공 동의' },
            { id: 'consent3-2', label: '민감정보 처리 동의' },
            { id: 'consent3-3', label: '민감정보 처리 동의' },
        ],
    },
    {
        id: 'consent5',
        label: '보험금 지급 심사를 위한 동의',
        children: [
            { id: 'consent5-1', label: '개인(신용) 정보의 수집·이용 동의' },
            { id: 'consent5-2', label: '개인(신용) 정보의 조회 동의' },
            { id: 'consent5-3', label: '개인(신용) 정보의 조회 동의' },
            { id: 'consent5-4', label: '개인(신용) 정보의 조회 동의' },
        ],
    },
    {
        id: 'consent6',
        label: '보험금 지급 심사를 위한 동의',
        children: [
            { id: 'consent2-1', label: '개인(신용) 정보의 제공 동의' },
            { id: 'consent2-2', label: '민감정보 처리 동의' },
            { id: 'consent2-3', label: '민감정보 처리 동의' },
        ],
    },
]

export default function Page() {
    return (
        <div>
            <PushBack />
            <ScrollArea className="w-full h-[calc(100vh)] relative overflow-y-auto">
                <div className="min-h-full flex flex-col">
                    <header className="flex items-center p-4">
                        <h1 className="text-xl text-[#4D4D4D] font-medium ml-2">
                            보험 계약 관련 동의(필수)
                        </h1>
                    </header>
                    {/* Main content section */}
                    <div className="relative px-5 grow">
                        <Accordion
                            type="multiple"
                            className="space-y-2 shadow-md rounded-lg"
                        >
                            {consentSections.map((section, index) => (
                                <CheckBox section={section} key={index} />
                            ))}
                        </Accordion>
                    </div>
                    {/* Footer section at the bottom */}
                    <div className="bg-[#F5F5F5] mt-4">
                        <div className="mt-6 text-sm text-gray-500 leading-relaxed px-5 space-y-2 py-1.5">
                            <p>유의사항</p>
                            <p className="text-xs">
                                본 동의를 거부하시는 경우에는 보험계약 상담 등
                                정상적인 서비스 제공이 불가능하며 본 동의서에
                                의한 개인(신용) 정보 조회는 귀하의 신용 등급에
                                영향을 주지 않습니다. 또한 동의하시더라도 당사
                                홈페이지 및 고객센터(02-2088-5454)를 통해
                                철회하거나 가입권유 목적의 연락에 대한 중단을
                                요청하실 수 있으며 은행연합회의 Do not Call
                                센터( www.donotcall.or.kr)를 통해 언제든지
                                마케팅활동에 대한 중지를 요청할 수 있습니다.
                            </p>
                        </div>
                        <div className="p-4 bg-white">
                            <Button className="w-full bg-[#ff4d1c] hover:bg-[#ff4d1c]/90 text-white h-12">
                                다음
                            </Button>
                        </div>
                    </div>
                </div>
                <ScrollBar />
            </ScrollArea>
        </div>
    )
}
