import React from 'react'
import Card from './Card'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import BottomNav from '@/components/bottom-nav'

export default function page() {
    return (
        <div>
            <div className="px-[26px]">
                <nav className="h-[42px] w-[390] bg-red-300 mb-[20px]">
                    this is nav bar
                </nav>
                <div className="h-[26px]">filter</div>
            </div>
            {/* <div className="space-y-[10px] bg-gray-100"> */}
            <ScrollArea className="relative flex flex-col h-screen justify-between">
                {Array.from({ length: 10 }).map((_, i) => (
                    <Card key={i} />
                ))}
                <ScrollBar />
                <div className="h-[180px]"></div>
            </ScrollArea>
            <div className="absolute bottom-0 right-0 w-full h-[70px]">
                <BottomNav />
            </div>
            {/* </div> */}
        </div>
    )
}
