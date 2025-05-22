import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'

import { CopyIcon, ReloadIcon, UpdateIcon, UploadIcon } from '@radix-ui/react-icons'
import { DollarSign, Shuffle, ShuffleIcon, WalletIcon } from 'lucide-react'
import React from 'react'
import TopupForm from './TopupForm'
import TransformForm from './TransformForm'
import WithdrawalForm from './WithdrawalForm'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

const Wallet = () => {
  return (
    <div className='flex flex-col items-center' >
      <div className='pt-10 w-full lg:w-[60%]'>
        <Card>
          <CardHeader>
            <div className='flex justify-between items-center'>
              <div className='flex items-center gap-5'>
                <WalletIcon size ={30}/>
                <div>
                  <CardTitle className="text-2xl">My Wallet</CardTitle>
                  <div className='flex items-center gap-2'>
                    <p className='text-gray-200 text-sm'>
                        #a3343434
                    </p>
                    <CopyIcon size={12} className='cursor-pointer hover: text-slate-300'></CopyIcon>
                  </div>
                </div>
              </div>
              <div>
                <ReloadIcon className='w-6 h-6 cursor-pointer '></ReloadIcon>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className='flex items-center '>
              <DollarSign className='inline' />
              <span className='pb-1    text-2xl font-semibold'>20000 </span>
            </div>
            <div className='flext gap-7 mt-5 '>
              <Dialog>
                <DialogTrigger>
                  <div className='h-24 w-24 hover:text-gray-400 cursonr-pointer flex flex-col
                   items-center justify-center rounded-md shadow-slate-800 shadow-md'>
                  <UploadIcon></UploadIcon>
                  <span className='text-sm mt-2 '>Add Money</span>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Top up your wallet</DialogTitle>
                  </DialogHeader>
                  <TopupForm></TopupForm>
                </DialogContent>
              </Dialog>
              
              <Dialog>
                <DialogTrigger>
                  <div className='h-24 w-24 hover:text-gray-400 cursonr-pointer flex flex-col items-center justify-center rounded-md shadow-slate-800 shadow-md'>
                  <UploadIcon></UploadIcon>
                  <span className='text-sm mt-2 '>Withdrawal</span>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Request Withdrawal</DialogTitle>
                  </DialogHeader>
                  <WithdrawalForm></WithdrawalForm>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger>
                  <div className='h-24 w-24 hover:text-gray-400 cursonr-pointer flex flex-col items-center justify-center rounded-md shadow-slate-800 shadow-md'>
                 <Shuffle></Shuffle>
                  <span className='text-sm mt-2 '>Transfer</span>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>    
                    <DialogTitle className='text centre  text-xl'>Transfer to other Wallet</DialogTitle>
                  </DialogHeader>
                  <TransformForm></TransformForm>
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>
        <div className='py-5 pt-10 '>
          <div className='flex gap-2 items-center'>
            <h1 className='text-2xl font-semibold'>History</h1>
            <UpdateIcon className='h-7 w-7 p-0 cursor-pointer hover:text-gray-400'/>
           </div>
            <div className='space-y-5'>
             {[1,2,3,1,1,1,1,1,1].map((item,i)=> <div key={i}>
                <Card className=" px-5 flex justify-between items-center p-2">
                  <div className='flex items-center gap-5'>
                    <Avatar>
                      <AvatarFallback>
                        <ShuffleIcon className=' '/>
                      </AvatarFallback>
                    </Avatar>
                    <div className='space-y-1'>
                      <h1>Buy Asset</h1>
                      <p className='text-sm text-gray-500'> 2025-04-11</p>
                    </div>

                  </div>
                  <div>
                    <p className={`text-green-500`}>999 USD</p>
                  </div>
                </Card>
              </div>)}

            </div>
         
        </div>

      </div>
    </div>
  )
}

export default Wallet
