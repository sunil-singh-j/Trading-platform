import { ActivityLogIcon, BookmarkIcon, DashboardIcon, ExitIcon, HomeIcon, PersonIcon } from '@radix-ui/react-icons'
import { CreditCardIcon, Icon, LandmarkIcon, WalletIcon } from 'lucide-react'
import path from 'path'
import React from 'react'
import { Button } from './components/ui/button'
import { SheetClose, SheetContent } from './components/ui/sheet'
const menu=[
    {name:"Home",path:"/",icon:<HomeIcon className='h-6 w-6'></HomeIcon>},
    {name:"Protfolio",path:"/portfolio",icon:<DashboardIcon className='h-6 w-6'></DashboardIcon>},
    {name:"Watchlist",path:"/watchlist",icon:<BookmarkIcon className='h-6 w-6'></BookmarkIcon>},
    {name:"Activity",path:"/activity",icon:<ActivityLogIcon className='h-6 w-6'></ActivityLogIcon>},
    {name:"Wallet",path:"/wallet",icon:<WalletIcon className='h-6 w-6'></WalletIcon>},
    {name:"Payment Details",path:"/payment-details",icon:<LandmarkIcon className='h-6 w-6'></LandmarkIcon>},
    {name:"Withdrawal",path:"/withdrawal",icon:<CreditCardIcon className='h-6 w-6'></CreditCardIcon>},
    {name:"Profile",path:"/profile",icon:<PersonIcon className='h-6 w-6'></PersonIcon>},
    {name:"Logout",path:"/",icon:<ExitIcon className='h-6 w-6'></ExitIcon>},
]
const Sidebar = () => {
  return (
    <div className='mt-10 space-y-5'>
        {menu.map((item)=>(
            <div key={item.name}>
                <SheetClose className='w-full' >
                <Button variant="outline" className="flex items-center gap-5 py-6 w-full">
                     <span className='w-8'>
                        {item.icon}
                      </span>
                     <p>item.name</p>
                 </Button>
                </SheetClose>
            </div>
        ))}
     
    </div>
  )
}

export default Sidebar
