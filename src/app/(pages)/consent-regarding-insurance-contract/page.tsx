'use client'
import React, { useState } from 'react'
import PushBack from '@/components/PushBack'
import CheckBox from './CheckBox'
import { Button } from '@/components/ui/button'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Accordion } from '@/components/ui/accordion'
import { Check } from 'lucide-react'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'

interface ConsentSection {
    id: string
    label: string
    children?: { id: string; label: string }[]
}

const consentSections: ConsentSection[] = [
    {
        id: 'consent1',
        label: '고객정보 관리 및 상품 제안, 보장 분석을 위한 동의',
        children: [
            { id: 'consent1-1', label: '수집 이용에 관한 사항(필수)' },
            { id: 'consent1-2', label: '제공에 관한 사항(필수)' },
            { id: 'consent1-3', label: '조회에 관한 사항(필수)' },
        ],
    },
    {
        id: 'consent2',
        label: '계약, 체결 이행 등을 위한 동의',
        children: [
            { id: 'consent2-1', label: '수집 이용에 관한 사항(필수)' },
            { id: 'consent2-2', label: '국내 제3자 제공동의(필수)' },
            { id: 'consent2-3', label: '국외 제3자 제공동의(필수)' },
            { id: 'consent2-4', label: '조회에 관한 사항(필수)' },
            { id: 'consent2-5', label: '서비스 이용관련 동의(필수)' },
        ],
    },
    {
        id: 'consent3',
        label: '가입 전 확인 해야할 사항',
        children: [{ id: 'consent3-1', label: '가입전 확인 해야할 사항' }],
    },
    {
        id: 'consent4',
        label: '상품 소개를 위한 선택 동의(선택)',
        children: [{ id: 'consent4-1', label: '수집, 이용에 관한 사항' }],
    },
]

export default function Page() {
    const [all, setAll] = useState(0)
    const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set())
    const consentLength =
        consentSections.length +
        consentSections.reduce(
            (acc, section) => acc + (section.children?.length || 0),
            0
        )

    const parentClick = () => {
        if (all === consentSections.length) {
            setSelectedItems(new Set())
            setAll(0)
        } else {
            const allIds = new Set<string>()
            consentSections.forEach((section) => {
                allIds.add(section.id)
                if (section.children?.length) {
                    section.children.forEach((child) => allIds.add(child.id))
                }
            })

            setSelectedItems(allIds)
            setAll(consentSections.length)
        }
    }

    return (
        <div>
            <PushBack />
            <div className="flex flex-col h-[calc(100vh-3.5rem)] overflow-y-auto scrollbar-hide">
                <div className="min-h-full flex flex-col">
                    <header className="flex items-center p-4">
                        <h1 className="text-xl text-[#4D4D4D] font-[700] ml-2">
                            보험 계약 관련 동의(필수)
                        </h1>
                    </header>
                    {/* Main content section */}
                    <div className="px-5">
                        <div className="flex items-start">
                            {consentLength === selectedItems.size ? (
                                <div
                                    onClick={parentClick}
                                    className="w-4 h-4 rounded-[2px] border-2 border-black/20 bg-[#4D4D4D] flex items-center justify-center"
                                >
                                    <Check className="text-white font-bold" />
                                </div>
                            ) : (
                                <div
                                    onClick={parentClick}
                                    className="w-4 h-4 rounded-[2px] border-2 border-black/50"
                                />
                            )}
                            <Label
                                htmlFor={'all'}
                                className="ml-2 text-[14px] text-[#4D4D4D]"
                            >
                                전체 동의
                            </Label>
                        </div>
                        <Separator className="mt-2" />
                    </div>
                    <div className="relative grow">
                        <Accordion type="multiple" className="space-y-2 p-4">
                            {consentSections.map((section, index) => (
                                <CheckBox
                                    section={section}
                                    key={index}
                                    setAll={setAll}
                                    selectedItems={selectedItems}
                                    setSelectedItems={setSelectedItems}
                                />
                            ))}
                        </Accordion>
                    </div>
                    {/* Footer section at the bottom */}
                    <div className="bg-[#F5F5F5] mt-4">
                        <div className="mt-6 text-sm text-gray-500 leading-relaxed px-5 space-y-2 py-1.5">
                            <p className="text-[#ADADAD]">유의사항</p>
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
            </div>
        </div>
    )
}
