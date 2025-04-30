import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import React from 'react'
import { Avatar,AvatarImage } from '@/components/ui/avatar'

const Activity = () => {
  return (
    <div className='p-5 lg:px-20'>
               <h1 className='font-bold text-3xl pb-5 text-left' >Activity</h1>
      <Table className="border">
                   
                    <TableHeader>
                     
                      <TableRow>
                        <TableHead className="py-5">Date & Time </TableHead>
                        <TableHead>Trading pair</TableHead>
                        <TableHead>Buy Price</TableHead>
                        <TableHead>Selling Price</TableHead>
                        <TableHead>Order Type</TableHead>
                        <TableHead>Profit/Loss</TableHead>
                        
                        <TableHead className="text-right ">Value</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                    {[1,1,1,1,1,1,1,1].map((item,index)=>
                          <TableRow key={index}>
                             <TableCell>
                              <p>2024/05/01</p>
                              <p className='text-gray-400'>12:34:32</p>
                              </TableCell>
                          <TableCell className="font-medium flex items-center gap-2">
                            <Avatar className="-z-50">
                                <AvatarImage src="https://coin-images.coingecko.com/coins/images/
                    1/large/bitcoin.png?1696501400"></AvatarImage>
                            <span>Bitcoin</span>
                            </Avatar>
                          </TableCell>
                          <TableCell>BTC</TableCell>
                          <TableCell>456789567</TableCell>
                          <TableCell>456789567</TableCell>
                          
                          <TableCell className="">23456789</TableCell>
                          <TableCell className="text-right">
                            345
                          </TableCell>
                        </TableRow>
                      )}
                      <TableRow>
                          <TableCell className="font-medium flex items-center gap-2">
                            <Avatar className="-z-50">
                                <AvatarImage src="https://coin-images.coingecko.com/coins/images/
                    1/large/bitcoin.png?1696501400"></AvatarImage>
                            <span>Bitcoin</span>
                            </Avatar>
                          </TableCell>
                          <TableCell>BTC</TableCell>
                          <TableCell>456789567</TableCell>
                          <TableCell>456789567</TableCell>
                          <TableCell>456789567</TableCell>
                          <TableCell className="text-right">23456789</TableCell>
                        </TableRow>
                      
                    </TableBody>
                  </Table>
    </div>
  )
}

export default Activity
