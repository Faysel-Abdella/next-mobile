import { Icons } from "@/components/ui/icons";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-white relative py-6 flex flex-col justify-between items-center h-full">
      <nav className="w-full flex flex-col gap-4">
        <div className="w-full px-4 mx-auto flex justify-between items-center ">
          <Link href={".."} className="flex items-center gap-4">
            <Icons.arrowLeft className="size-5" />
            <span className="text-lg">알림 설정</span>
          </Link>
        </div>
        <Separator />
      </nav>
      <div className="w-full h-full  space-y-4 flex flex-col text-[#4D4D4D]">
      <div className="flex flex-col gap-5 p-5 text-[#4D4D4D] font-light">
        <div className="flex flex-col gap-1">
          <p className="text-md ">공지사항3 텍스트 영역</p>
          <p className=" text-[#ADADAD] text-[13px]">2024.11.01</p>
        </div>
        
        <Separator className="bg-[#F5F5F5]"/>

        <div className="flex flex-col gap-1">
          <p className="text-md ">공지사항2 텍스트 영역</p>
          <p className=" text-[#ADADAD] text-[13px]">2024.10.20</p>
        </div>

        <Separator className="bg-[#F5F5F5]"/>

        <div className="flex flex-col gap-1">
          <p className="text-md ">공지사항1 텍스트 영역</p>
          <p className=" text-[#ADADAD] text-[13px]">2024.10.01</p>
        </div>


      </div>
       
      </div>
     
    </div>
  );
}
