import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { DotIcon } from 'lucide-react'
import React, { useState } from 'react'

function TradingForm() {
    const handleChange=()=>{

    }
    const [orderType,setOrderType]=useState("BUY")
  return (
    <div className='space-y-10 p-5'>
      <div>
        <div className='flex gap-4 items-center justify-between'>
            <Input className="py-7 focus:outline-none "
            placeholder="Enter Amount....."
            onChange={handleChange}
            type='number'
            name="amount"
            /> 
            <div>
                <p className='border text-2xl justify-center items-center w-36 h-14 rounded-md'>4546</p>

            </div>
        </div>
        {true && <h1 className='text-red-500 text-center pt-4'>Insufficent wallet balance to buy </h1>}

      </div>
      <div>
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
        <div className='flex items-center justify-between'>
            <p>Order Type</p>
            <p>Market Order</p>

        </div>
        <div className='flex items-center justify-between'>
            <p>{orderType=="BUY"? "Available Case":"Available Quaantity"}</p>

        </div>
        <div>
            <Button className={`w-full py-6 ${orderType=="SELL"?"bg-red-500 text-white":""}`}>
                {orderType}
            </Button>
             <Button
             variant="link"
             className="w-full mt-5 text-xl"
              onClick={()=>setOrderType(orderType=="BUY"?"SELL":"BUY")}>
                {orderType=="BUY"?" Or Sell":"or Buy"}
            </Button>
        </div>
      </div>
    </div>
  )
}

export default TradingForm
