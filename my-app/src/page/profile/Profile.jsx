import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { VerifiedIcon } from 'lucide-react'
import React from 'react'
import AccountVerificationForm from './AccountVerificationForm'

const Profile = () => {

  const handleEnableTwoStepVerification=()=>{
    console.log("two step verification")
  }
  return (
    <div className='flex flex-col items-center mb-5'>
      
      <div className='pt-10 w-full lg:w-[60%]'>
        <Card>
          <CardHeader className="pb-9">
            <CardTitle>Your Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='lg:flex gap-32'>
              <div className='space-y-7'>
                <div className='flex'>
                  <p className='w-[9rem]'>Email:</p>
                  <p className='text-gray-500'> sdfdfdfdf@gmailc.com</p>
                </div>
                 <div className='flex'>
                  <p className='w-[9rem]'>Full Name:</p>
                  <p className='text-gray-500'> Ram</p>
                </div>
                 <div className='flex'>
                  <p className='w-[9rem]'>Date of Birth</p>
                  <p className='text-gray-500'> 01/01/2001</p>
                </div>
                 <div className='flex'>
                  <p className='w-[9rem]'>Nationality</p>
                  <p className='text-gray-500'> Indian</p>
                </div>
              </div>
               <div className='space-y-7'>
                <div className='flex'>
                  <p className='w-[9rem]'>Address</p>
                  <p className='text-gray-500'> hyderabad </p>
                </div>
                 <div className='flex'>
                  <p className='w-[9rem]'>City</p>
                  <p className='text-gray-500'> Hyderabad</p>
                </div>
                 <div className='flex'>
                  <p className='w-[9rem]'>PostCode</p>
                  <p className='text-gray-500'> 000000</p>
                </div>
                 <div className='flex'>
                  <p className='w-[9rem]'>Country</p>
                  <p className='text-gray-500'> India</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className='mt-6'>

          <Card className="w-full">
            <CardHeader className="pb-7">
              <div className='flex items-center gap-3'>
                <CardTitle>2 Step Varification</CardTitle>

                {true ?<Badge className={"space-x-2 text-white bg-green-500"}>
                  <VerifiedIcon/>
                  <span>Enabled</span>
                </Badge>:<Badge className="bg-orange-500">
                  Disabled
                </Badge>}
                
              </div>
            </CardHeader>
            <CardContent>
              <div>
                    <Dialog>
                      <DialogTrigger>
                        <Button>Enabled Two Step Verification</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Verify your account</DialogTitle>
                          <AccountVerificationForm handleSubmit={handleEnableTwoStepVerification}></AccountVerificationForm>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>

              </div>
            </CardContent>

          </Card>

        </div>
      </div>
    </div>
  )
}

export default Profile
