import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import React from 'react'
import PaymentDetailsForm from './PaymentDetailsForm'

const PaymentDetails = () => {
  return (
    <div className='px-20'>
      <h1 className='text-3xl font-bold py-10'>Payment Details</h1>
     {false ? <Card>
        <CardHeader>
          <CardTitle>
            Yes Bank
          </CardTitle>
          <CardDescription>
            A/C NO :
            ************************974
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='flex items-center text-left '>
            <p className='w-32'>A/C Holder </p>
            <p className='text-gray-400'>: RAm</p>
          </div>
          <div className='flex items-center text-left'>
            <p className='w-32'>IFSC</p>
            <p className='text-gray-400'>: YESB000007</p>
          </div>
        </CardContent>
      </Card>: <Dialog>
  <DialogTrigger><Button className="py-6">Add payment Details</Button></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Payment Details</DialogTitle>
      <PaymentDetailsForm></PaymentDetailsForm>
    </DialogHeader>
  </DialogContent>
</Dialog>
}

     

    </div>
  )
}

export default PaymentDetails
