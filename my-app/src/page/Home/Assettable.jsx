import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import React from 'react'
import { Avatar,AvatarImage } from '@/components/ui/avatar'
import { useNavigate } from 'react-router-dom'

function Assettable() {
  const navigate=useNavigate()
  return (
    <div>
      <Table>
 
  <TableHeader>
   
    <TableRow>
      <TableHead className="w-[100px]">COIN</TableHead>
      <TableHead>SYMBOL</TableHead>
      <TableHead>VOLUME</TableHead>
      <TableHead>MARKET CAP</TableHead>
      <TableHead>24HR</TableHead>
      <TableHead className="text-right">PRICE</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
  {[1,1,1,1,1,1,1,1].map((item,index)=>
        <TableRow key={index}>
        <TableCell onClick={()=>navigate(`/market/bitcoin/`)} className="font-medium flex items-center gap-2">
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

export default Assettable
