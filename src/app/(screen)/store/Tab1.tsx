import { Icons } from '@/components/ui/icons'
import Image from 'next/image'
import React from 'react'

export default function Tab1() {
    return (
        <div className="w-full px-4 mx-auto space-y-4">
            <div className="space-y-4">
                <div className="h-[80px] flex flex-row items-center justify-between relative">
                    <div className="w-[calc(100%-5rem)] h-full flex items-center gap-4 px-2 rounded-lg shadow-lg ">
                        <Image
                            src="/images/Starbucks.png"
                            alt="Starbucks"
                            width={80}
                            height={80}
                            className="h-[60px] w-[60px] object-cover"
                        />
                        <div className="text-sm space-y-1">
                            <p className="text-muted-foreground">~[스타벅스]</p>
                            <h3 className="">아이스 아메리카노</h3>
                            <p className="text-muted-foreground">
                                ~12월 31일 까지
                            </p>
                        </div>
                    </div>
                    <div className="absolute right-20 translate-x-1/2 z-10 h-[calc(100%-17px)] flex flex-col items-center gap-2">
                        <div className="h-1/3 w-0.5 bg-gradient-to-b from-white to-border/60 rounded-b-full" />
                        <div className="h-1/3 w-0.5 bg-border/80 rounded-full" />
                        <div className="h-1/3 w-0.5 bg-border rounded-full" />
                        <div className="h-1/3 w-0.5 bg-border rounded-t-full" />
                    </div>
                    <div className="h-full w-20 rounded-lg shadow-lg  px-4 bg-[#FFEFE8]">
                        <div className="h-full flex flex-col shrink-0 justify-center items-center">
                            <Icons.currency
                                fill={'hsl(var(--primary))'}
                                className="size-6"
                            />
                            <div className="text-sm text-primary">300 P</div>
                        </div>
                    </div>
                </div>
                <div className="h-[80px] flex flex-row items-center justify-between relative">
                    <div className="w-[calc(100%-5rem)] h-full flex items-center gap-4 px-2 rounded-lg shadow-lg ">
                        <Image
                            src="/images/Starbucks.png"
                            alt="Starbucks"
                            width={80}
                            height={80}
                            className="h-[60px] w-[60px] object-cover"
                        />
                        <div className="text-sm space-y-1">
                            <p className="text-muted-foreground">~[스타벅스]</p>
                            <h3 className="">아이스 아메리카노</h3>
                            <p className="text-muted-foreground">
                                ~12월 31일 까지
                            </p>
                        </div>
                    </div>
                    <div className="absolute right-20 translate-x-1/2 z-10 h-[calc(100%-17px)] flex flex-col items-center gap-2">
                        <div className="h-1/3 w-0.5 bg-gradient-to-b from-white to-border/60 rounded-b-full" />
                        <div className="h-1/3 w-0.5 bg-border/80 rounded-full" />
                        <div className="h-1/3 w-0.5 bg-border rounded-full" />
                        <div className="h-1/3 w-0.5 bg-border rounded-t-full" />
                    </div>
                    {/* <div className="h-full w-20 rounded-lg shadow-lg  px-4 bg-[#FFEFE8]">
                                <div className="h-full flex flex-col shrink-0 justify-center items-center">
                                    <Icons.currency fill={"hsl(var(--primary))"} className="size-6" />
                                    <div className="text-sm text-primary">300 P</div>
                                </div>
                            </div> */}
                </div>
                <div className="h-[80px] flex flex-row items-center justify-between relative">
                    <div className="w-[calc(100%-5rem)] h-full flex items-center gap-4 px-2 rounded-lg shadow-lg ">
                        <Image
                            src="/images/Starbucks.png"
                            alt="Starbucks"
                            width={80}
                            height={80}
                            className="h-[60px] w-[60px] object-cover"
                        />
                        <div className="text-sm space-y-1">
                            <p className="text-muted-foreground">~[스타벅스]</p>
                            <h3 className="">아이스 아메리카노</h3>
                            <p className="text-muted-foreground">
                                ~12월 31일 까지
                            </p>
                        </div>
                    </div>
                    <div className="absolute right-20 translate-x-1/2 z-10 h-[calc(100%-17px)] flex flex-col items-center gap-2">
                        <div className="h-1/3 w-0.5 bg-gradient-to-b from-white to-border/60 rounded-b-full" />
                        <div className="h-1/3 w-0.5 bg-border/80 rounded-full" />
                        <div className="h-1/3 w-0.5 bg-border rounded-full" />
                        <div className="h-1/3 w-0.5 bg-border rounded-t-full" />
                    </div>
                    <div className="h-full w-20 rounded-lg shadow-lg  px-4 bg-[#FFEFE8]">
                        <div className="h-full flex flex-col shrink-0 justify-center items-center">
                            <Icons.currency
                                fill={'hsl(var(--primary))'}
                                className="size-6"
                            />
                            <div className="text-sm text-primary">300 P</div>
                        </div>
                    </div>
                </div>
                <div className="h-[80px] flex flex-row items-center justify-between relative">
                    <div className="w-[calc(100%-5rem)] h-full flex items-center gap-4 px-2 rounded-lg shadow-lg ">
                        <Image
                            src="/images/Starbucks.png"
                            alt="Starbucks"
                            width={80}
                            height={80}
                            className="h-[60px] w-[60px] object-cover"
                        />
                        <div className="text-sm space-y-1">
                            <p className="text-muted-foreground">~[스타벅스]</p>
                            <h3 className="">아이스 아메리카노</h3>
                            <p className="text-muted-foreground">
                                ~12월 31일 까지
                            </p>
                        </div>
                    </div>
                    <div className="absolute right-20 translate-x-1/2 z-10 h-[calc(100%-17px)] flex flex-col items-center gap-2">
                        <div className="h-1/3 w-0.5 bg-gradient-to-b from-white to-border/60 rounded-b-full" />
                        <div className="h-1/3 w-0.5 bg-border/80 rounded-full" />
                        <div className="h-1/3 w-0.5 bg-border rounded-full" />
                        <div className="h-1/3 w-0.5 bg-border rounded-t-full" />
                    </div>
                    {/* <div className="h-full w-20 rounded-lg shadow-lg  px-4 bg-[#FFEFE8]">
                                <div className="h-full flex flex-col shrink-0 justify-center items-center">
                                    <Icons.currency fill={"hsl(var(--primary))"} className="size-6" />
                                    <div className="text-sm text-primary">300 P</div>
                                </div>
                            </div> */}
                </div>
                <div className="h-[80px] flex flex-row items-center justify-between relative">
                    <div className="w-[calc(100%-5rem)] h-full flex items-center gap-4 px-2 rounded-lg shadow-lg ">
                        <Image
                            src="/images/Starbucks.png"
                            alt="Starbucks"
                            width={80}
                            height={80}
                            className="h-[60px] w-[60px] object-cover"
                        />
                        <div className="text-sm space-y-1">
                            <p className="text-muted-foreground">~[스타벅스]</p>
                            <h3 className="">아이스 아메리카노</h3>
                            <p className="text-muted-foreground">
                                ~12월 31일 까지
                            </p>
                        </div>
                    </div>
                    <div className="absolute right-20 translate-x-1/2 z-10 h-[calc(100%-17px)] flex flex-col items-center gap-2">
                        <div className="h-1/3 w-0.5 bg-gradient-to-b from-white to-border/60 rounded-b-full" />
                        <div className="h-1/3 w-0.5 bg-border/80 rounded-full" />
                        <div className="h-1/3 w-0.5 bg-border rounded-full" />
                        <div className="h-1/3 w-0.5 bg-border rounded-t-full" />
                    </div>
                    <div className="h-full w-20 rounded-lg shadow-lg  px-4 bg-[#FFEFE8]">
                        <div className="h-full flex flex-col shrink-0 justify-center items-center">
                            <Icons.currency
                                fill={'hsl(var(--primary))'}
                                className="size-6"
                            />
                            <div className="text-sm text-primary">300 P</div>
                        </div>
                    </div>
                </div>
                <div className="h-[80px] flex flex-row items-center justify-between relative">
                    <div className="w-[calc(100%-5rem)] h-full flex items-center gap-4 px-2 rounded-lg shadow-lg ">
                        <Image
                            src="/images/Starbucks.png"
                            alt="Starbucks"
                            width={80}
                            height={80}
                            className="h-[60px] w-[60px] object-cover"
                        />
                        <div className="text-sm space-y-1">
                            <p className="text-muted-foreground">~[스타벅스]</p>
                            <h3 className="">아이스 아메리카노</h3>
                            <p className="text-muted-foreground">
                                ~12월 31일 까지
                            </p>
                        </div>
                    </div>
                    <div className="absolute right-20 translate-x-1/2 z-10 h-[calc(100%-17px)] flex flex-col items-center gap-2">
                        <div className="h-1/3 w-0.5 bg-gradient-to-b from-white to-border/60 rounded-b-full" />
                        <div className="h-1/3 w-0.5 bg-border/80 rounded-full" />
                        <div className="h-1/3 w-0.5 bg-border rounded-full" />
                        <div className="h-1/3 w-0.5 bg-border rounded-t-full" />
                    </div>
                    <div className="h-full w-20 rounded-lg shadow-lg  px-4 bg-[#FFEFE8]">
                        <div className="h-full flex flex-col shrink-0 justify-center items-center">
                            <Icons.currency
                                fill={'hsl(var(--primary))'}
                                className="size-6"
                            />
                            <div className="text-sm text-primary">300 P</div>
                        </div>
                    </div>
                </div>
                <div className="h-[80px] flex flex-row items-center justify-between relative">
                    <div className="w-[calc(100%-5rem)] h-full flex items-center gap-4 px-2 rounded-lg shadow-lg ">
                        <Image
                            src="/images/Starbucks.png"
                            alt="Starbucks"
                            width={80}
                            height={80}
                            className="h-[60px] w-[60px] object-cover"
                        />
                        <div className="text-sm space-y-1">
                            <p className="text-muted-foreground">~[스타벅스]</p>
                            <h3 className="">아이스 아메리카노</h3>
                            <p className="text-muted-foreground">
                                ~12월 31일 까지
                            </p>
                        </div>
                    </div>
                    <div className="absolute right-20 translate-x-1/2 z-10 h-[calc(100%-17px)] flex flex-col items-center gap-2">
                        <div className="h-1/3 w-0.5 bg-gradient-to-b from-white to-border/60 rounded-b-full" />
                        <div className="h-1/3 w-0.5 bg-border/80 rounded-full" />
                        <div className="h-1/3 w-0.5 bg-border rounded-full" />
                        <div className="h-1/3 w-0.5 bg-border rounded-t-full" />
                    </div>
                    <div className="h-full w-20 rounded-lg shadow-lg  px-4 bg-[#FFEFE8]">
                        <div className="h-full flex flex-col shrink-0 justify-center items-center">
                            <Icons.currency
                                fill={'hsl(var(--primary))'}
                                className="size-6"
                            />
                            <div className="text-sm text-primary">300 P</div>
                        </div>
                    </div>
                </div>
                <div className="h-[80px] flex flex-row items-center justify-between relative">
                    <div className="w-[calc(100%-5rem)] h-full flex items-center gap-4 px-2 rounded-lg shadow-lg ">
                        <Image
                            src="/images/Starbucks.png"
                            alt="Starbucks"
                            width={80}
                            height={80}
                            className="h-[60px] w-[60px] object-cover"
                        />
                        <div className="text-sm space-y-1">
                            <p className="text-muted-foreground">~[스타벅스]</p>
                            <h3 className="">아이스 아메리카노</h3>
                            <p className="text-muted-foreground">
                                ~12월 31일 까지
                            </p>
                        </div>
                    </div>
                    <div className="absolute right-20 translate-x-1/2 z-10 h-[calc(100%-17px)] flex flex-col items-center gap-2">
                        <div className="h-1/3 w-0.5 bg-gradient-to-b from-white to-border/60 rounded-b-full" />
                        <div className="h-1/3 w-0.5 bg-border/80 rounded-full" />
                        <div className="h-1/3 w-0.5 bg-border rounded-full" />
                        <div className="h-1/3 w-0.5 bg-border rounded-t-full" />
                    </div>
                    <div className="h-full w-20 rounded-lg shadow-lg  px-4 bg-[#FFEFE8]">
                        <div className="h-full flex flex-col shrink-0 justify-center items-center">
                            <Icons.currency
                                fill={'hsl(var(--primary))'}
                                className="size-6"
                            />
                            <div className="text-sm text-primary">300 P</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
