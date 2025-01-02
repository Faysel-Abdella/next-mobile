import PushBack from '@/components/PushBack'
import React from 'react'
import Questions from './Questions'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Button } from '@/components/ui/button'

const questions = [
    '최근 3개월 이내에 의사로부터 진찰, 검사, 건강검진을 통하여 의료행위를 받았거나 약물을 상시 복용한 사실이 있습니까?',
    '최근 1년 이내에 의사로부터 진찰, 검사를 통하여 추가 검사(재검사)를 받은 사실이 있습니까?',
    '최근 5년 이내에 의사로부터 진찰, 검사를 통하여 질병으로 의사로부터 의료행위를 받은 사실이 있습니까?',
    '미국 납세의무자 에 해당하거나, 한국 이외의 납세의무 국가가 있습니까?',
    '이 보험의 실제소유자가 고객님 맞으신가요?',
    '이 보험의 실제소유자가 고객님 맞으신가요?',
]

export default function page() {
    return (
        <div className="pb-5 overflow-y-auto">
            <PushBack />
            <ScrollArea className="w-full h-[calc(100vh-3rem)] relative overflow-y-auto px-5">
                <div className="py-5">
                    <p className="text-[#4D4D4D] font-[500] text-xl">
                        보험 가입에 중요한 정보입니다.
                    </p>
                    <p className="text-[#4D4D4D] font-[700] text-xl">
                        꼭 확인해주세요!
                    </p>
                </div>
                <div className="space-y-5">
                    {questions.map((question, index) => (
                        <Questions
                            index={index + 1}
                            key={index}
                            question={question}
                        />
                    ))}
                </div>
                <div className="p-4 bg-white">
                    <Button className="w-full bg-[#ff4d1c] hover:bg-[#ff4d1c]/90 text-white h-12">
                        다음
                    </Button>
                </div>
            </ScrollArea>
        </div>
    )
}
