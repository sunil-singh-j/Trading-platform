import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import React from 'react'
import { Avatar,AvatarImage } from '@/components/ui/avatar'

const Protfolio = () => {
  return (
    <div className='p-5 lg:p-20'>
      <h1 className='font-bold text-3xl pb-5' >Protfolio</h1>
         <Table>
        
         <TableHeader>
          
           <TableRow>
             <TableHead className="">Assets</TableHead>
             <TableHead>Price</TableHead>
             <TableHead>Unit</TableHead>
             <TableHead>Change</TableHead>
             <TableHead>Change%</TableHead>
             <TableHead >Valume</TableHead>
           </TableRow>
         </TableHeader>
         <TableBody>
         {[1,1,1,1,1,1,1,1].map((item,index)=>
               <TableRow key={index}>
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

export default Protfolio
