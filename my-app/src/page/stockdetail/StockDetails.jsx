import { AvatarImage,Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { BookmarkFilledIcon } from '@radix-ui/react-icons'
import { BookmarkIcon, DotIcon } from 'lucide-react'

import React from 'react'
import TradingForm from './TradingForm'

const StockDetails = () => {
  return (
    <div className='p-5 mt-5 '>
      <div className='flex justify-between '>
        <div className='flex gap-5 items-center'>
          <div>
            <Avatar>
              <AvatarImage src={"https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400"} />
            </Avatar>
          </div>
          <div>
              <div className='flex items-center gap-2'>
                <p>BTC</p>
                <DotIcon className='text-gray-400'/>
                <p className='text bg-gray-400'>Bitcon</p>
              </div>
              <div className='flex items-end gap-2'>
                <p className='text-xl font-bold'>$454545</p>
                <p className='text-red-600'>
                  <span>-123456787654.3545</span>
                  <span>(-0.23456%)</span>
                </p>
              </div>
           
          </div>

        </div>
        <div className='flex items-center gap-4'>
          <Button>
            {true ?<BookmarkFilledIcon className='h-6 w-6'></BookmarkFilledIcon>
            :<BookmarkIcon className='h-6 w-6'></BookmarkIcon>}
          </Button>
          <Dialog>
            <DialogTrigger>
              <Button size="lg">
                Trade
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>How much do you want to spend</DialogTitle>
                <TradingForm/>
              </DialogHeader>
            </DialogContent>
          </Dialog>

        </div>
    </div>
    </div>
  )
}

export default StockDetails
