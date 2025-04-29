import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import Sidebar from '@/page/Navbar/Sidebar'
import {DragHandleHorizontalIcon, MagnifyingGlassIcon} from '@radix-ui/react-icons'
import React from 'react'

const Navbar = () => {
  return (
    <div className='px-2 py-3 border-b z-50 bg-background bg-opacity-0 sticky top-0 left-0 right-0 flex justify-between  items-center'>
        <div className='flex items-center gap-3'>
        <Sheet>
  <SheetTrigger>
    <Button varient="ghost" size="icon" className="rounded-full h-11 w-11 ">
        <DragHandleHorizontalIcon className='h-7 w-7 '></DragHandleHorizontalIcon>
    </Button>
  </SheetTrigger>
  <SheetContent className="w-72 border-r-0 flex flex-col justify-center " side="left">
    <SheetHeader>
      <SheetTitle>
        <div className='text-3xl flex justify-center items-center gap-1'>
           
            <Avatar>
                <AvatarImage src="https://cdn.pixabay.com/photo/2021/
04/30/16/47/binance-logo-6219389_1280.png"></AvatarImage>
            </Avatar>
            <div>
                <span className='font-bold text-orange-700'>Ram</span>
                <span>Trading</span>
            </div>
        </div>
      </SheetTitle>
      
    </SheetHeader>
    <Sidebar></Sidebar>
  </SheetContent>
</Sheet>

<p className='text-sm lg:text-base cursor-pointer'> Ram trading</p>
      <div className='p-0 ml-9'>
        <Button varient="outline" className="flex items-center gap-3">
            <MagnifyingGlassIcon></MagnifyingGlassIcon>
            <span>Search</span>
        </Button>
      </div>

        </div>
        <div>
            <Avatar>
                <AvatarFallback>Z</AvatarFallback>
            </Avatar>
        </div>
    </div>
  )
}

export default Navbar
