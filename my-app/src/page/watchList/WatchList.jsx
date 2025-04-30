import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import React from 'react'
import { Avatar,AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { BookmarkFilledIcon } from '@radix-ui/react-icons'

const WatchList = () => {

  const handleRemoveToWatchList=()=>{
    console.log(value)
  }
  return (
    <div className='p-5 lg:p-20'>
         <h1 className='font-bold text-3xl pb-5 text-left' >Watchlist</h1>
             <Table className="border">
             
              <TableHeader>
               
                <TableRow>
                  <TableHead className="py-5">COIN</TableHead>
                  <TableHead>SYMBOL</TableHead>
                  <TableHead>VOLUME</TableHead>
                  <TableHead>MARKET CAP</TableHead>
                  <TableHead>24HR</TableHead>
                  <TableHead className="">PRICE</TableHead>
                  <TableHead className="text-right text-red">Remove</TableHead>
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
                    <TableCell className="">23456789</TableCell>
                    <TableCell className="text-right">
                      <Button onClick={()=>handleRemoveToWatchList(item.id)} variant="ghost" size="icon" className="h-10 w-10">
                        <BookmarkFilledIcon className='w-6 h-6 '></BookmarkFilledIcon>
                      </Button>
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

export default WatchList
