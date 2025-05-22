import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@/components/ui/input-otp'
import { DialogClose } from '@radix-ui/react-dialog'
import React, { useState } from 'react'

function AccountVerificationForm() {
  const [value,setValue]=useState("")
  const handleSubmit=()=>{
    console.log(value)
  }
  return (
    <div className='flex justify-center'>
      <div className='space-y-5 mt-10 w-full'>
        <div className='flex justify-between items-centre'>
          <p>Email :</p>
          <p>sdfdfdgdg@gmail.com</p>
          <Dialog>
                <DialogTrigger><Button>Send otp</Button></DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Enter OTP</DialogTitle>
                    
                  </DialogHeader>
                  <div className='py-5 flex gap-10 justify-center items-center '>
                    <InputOTP 
                    value={value}
                    onChange={(value)=>setValue(value)}
                    maxLength={6}>
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                      </InputOTPGroup>
                      <InputOTPSeparator />
                      <InputOTPGroup>
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                    <DialogClose>
                      <Button className="w-[10rem]"
                      onClick={handleSubmit}> Submit</Button>
                    </DialogClose>

                    </div>
                 
                </DialogContent>
              </Dialog>

        </div>
      </div>
        
      
    </div>
  )
}

export default AccountVerificationForm
