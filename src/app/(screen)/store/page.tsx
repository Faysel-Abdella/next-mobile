'use client'

import { Button } from '@/components/ui/button'
import { Icons } from '@/components/ui/icons'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import {
    CustomDrawer,
    CustomDrawerTrigger,
    CustomDrawerContent,
} from '@/components/custom-drawer'
import { useState } from 'react'
import { X } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Tab1 from './Tab1'
import Tab2 from './Tab2'

export default function Page() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    return (
        <div className="relative flex flex-col h-full -mt-1">
            <CustomDrawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
                <Tabs defaultValue="tab1">
                    <div className="w-full px-4 pb-2 pt-4 shadow-sm">
                        <TabsList className="w-full justify-start rounded-none bg-transparent p-0 gap-4">
                            <TabsTrigger
                                value="tab1"
                                className="bg-transparent px-0 rounded-none border-[#8A8A8A] pb-2 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2"
                            >
                                상점
                            </TabsTrigger>
                            <TabsTrigger
                                value="tab2"
                                className="bg-transparent px-0 rounded-none border-[#8A8A8A] pb-2 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2"
                            >
                                미니보험
                            </TabsTrigger>
                        </TabsList>
                    </div>
                    <ScrollArea className="w-full h-[calc(100vh-8rem)] relative overflow-y-auto">
                        <div className="flex justify-between px-4 mt-4">
                            <CustomDrawerTrigger asChild>
                                <Button
                                    variant={'ghost'}
                                    className="flex items-center gap-2 px-2 py-0"
                                >
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M15.9375 8.99992H6.67125M3.4005 8.99992H2.0625M3.4005 8.99992C3.4005 8.56629 3.57276 8.15042 3.87938 7.8438C4.186 7.53718 4.60187 7.36492 5.0355 7.36492C5.46913 7.36492 5.885 7.53718 6.19162 7.8438C6.49824 8.15042 6.6705 8.56629 6.6705 8.99992C6.6705 9.43355 6.49824 9.84942 6.19162 10.156C5.885 10.4627 5.46913 10.6349 5.0355 10.6349C4.60187 10.6349 4.186 10.4627 3.87938 10.156C3.57276 9.84942 3.4005 9.43355 3.4005 8.99992ZM15.9375 13.9552H11.6265M11.6265 13.9552C11.6265 14.3889 11.4538 14.8052 11.1471 15.1119C10.8404 15.4186 10.4245 15.5909 9.99075 15.5909C9.55712 15.5909 9.14125 15.4179 8.83463 15.1113C8.52801 14.8047 8.35575 14.3888 8.35575 13.9552M11.6265 13.9552C11.6265 13.5214 11.4538 13.1058 11.1471 12.7992C10.8404 12.4925 10.4245 12.3202 9.99075 12.3202C9.55712 12.3202 9.14125 12.4924 8.83463 12.799C8.52801 13.1057 8.35575 13.5215 8.35575 13.9552M8.35575 13.9552H2.0625M15.9375 4.04467H13.6088M10.338 4.04467H2.0625M10.338 4.04467C10.338 3.61104 10.5103 3.19517 10.8169 2.88855C11.1235 2.58193 11.5394 2.40967 11.973 2.40967C12.1877 2.40967 12.4003 2.45196 12.5987 2.53412C12.7971 2.61629 12.9773 2.73672 13.1291 2.88855C13.2809 3.04037 13.4014 3.22061 13.4835 3.41898C13.5657 3.61735 13.608 3.82996 13.608 4.04467C13.608 4.25938 13.5657 4.47199 13.4835 4.67036C13.4014 4.86872 13.2809 5.04896 13.1291 5.20079C12.9773 5.35261 12.7971 5.47304 12.5987 5.55521C12.4003 5.63738 12.1877 5.67967 11.973 5.67967C11.5394 5.67967 11.1235 5.50741 10.8169 5.20079C10.5103 4.89417 10.338 4.4783 10.338 4.04467Z"
                                            stroke="#8A8A8A"
                                            strokeMiterlimit="10"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                    <span className="text-muted-foreground/60">
                                        필터
                                    </span>
                                </Button>
                            </CustomDrawerTrigger>
                            <div className="flex justify-center items-center">
                                <Icons.currency
                                    fill={'hsl(var(--primary))'}
                                    className="size-6"
                                />
                                <div className="text-sm text-primary">
                                    300 P
                                </div>
                            </div>
                        </div>
                        <TabsContent value="tab1">
                            <Tab1 />
                        </TabsContent>
                        <TabsContent value="tab2" className="">
                            <Tab2 />
                        </TabsContent>
                    </ScrollArea>
                </Tabs>

                <CustomDrawerContent className="relative px-5 py-8  flex flex-col gap-4 font-medium">
                    <div className="px-0 w-full flex justify-between items-center">
                        <div className="text-muted-foreground">필터</div>
                        <div>
                            <X
                                className="text-muted-foreground"
                                onClick={() => setIsDrawerOpen((pre) => !pre)}
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="text-muted-foreground">브랜드</div>
                        <div className="flex gap-2 flex-wrap">
                            <Button
                                size={'sm'}
                                variant={'outline'}
                                className="rounded-full text-muted-foreground/80"
                            >
                                전체
                            </Button>
                            <Button
                                size={'sm'}
                                variant={'outline'}
                                className="rounded-full text-muted-foreground/80"
                            >
                                스타벅스
                            </Button>
                            <Button
                                size={'sm'}
                                variant={'outline'}
                                className="rounded-full text-muted-foreground/80"
                            >
                                파리바게트
                            </Button>
                            <Button
                                size={'sm'}
                                variant={'outline'}
                                className="rounded-full text-muted-foreground/80"
                            >
                                맥도날드
                            </Button>
                            <Button
                                size={'sm'}
                                variant={'outline'}
                                className="rounded-full text-muted-foreground/80"
                            >
                                요아정
                            </Button>
                            <Button
                                size={'sm'}
                                variant={'outline'}
                                className="rounded-full text-muted-foreground/80"
                            >
                                롯데리아
                            </Button>
                            <Button
                                size={'sm'}
                                variant={'outline'}
                                className="rounded-full text-muted-foreground/80"
                            >
                                뚜레주르
                            </Button>
                        </div>
                    </div>
                    <Separator />
                    <div className="space-y-2">
                        <div className="text-muted-foreground">가격</div>
                        <div className="flex gap-2 flex-wrap">
                            <Button
                                size={'sm'}
                                variant={'outline'}
                                className="rounded-full text-muted-foreground/80"
                            >
                                전체
                            </Button>
                            <Button
                                size={'sm'}
                                variant={'outline'}
                                className="rounded-full text-muted-foreground/80"
                            >
                                1,000 미만
                            </Button>
                            <Button
                                size={'sm'}
                                variant={'outline'}
                                className="rounded-full text-muted-foreground/80"
                            >
                                2,000 미만
                            </Button>
                            <Button
                                size={'sm'}
                                variant={'outline'}
                                className="rounded-full text-muted-foreground/80"
                            >
                                3,000 미만
                            </Button>
                            <Button
                                size={'sm'}
                                variant={'outline'}
                                className="rounded-full text-muted-foreground/80"
                            >
                                4,000 미만
                            </Button>
                            <Button
                                size={'sm'}
                                variant={'outline'}
                                className="rounded-full text-muted-foreground/80"
                            >
                                5,000 미만
                            </Button>
                        </div>
                    </div>
                    <div className="px-0">
                        <div className="w-full flex gap-4">
                            <Button
                                size={'lg'}
                                className="w-36 bg-primary/10 text-primary shadow hover:bg-primary/15"
                            >
                                초기화
                            </Button>
                            <Button size={'lg'} className="w-full">
                                적용
                            </Button>
                        </div>
                    </div>
                </CustomDrawerContent>
            </CustomDrawer>
        </div>
    )
}
