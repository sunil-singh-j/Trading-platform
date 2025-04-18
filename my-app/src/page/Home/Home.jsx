import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import Assettable from './Assettable'

function Home() {
    const [category,setcategory]=useState("all")
    const handleCategory=(value)=>{
        setcategory(value)
    }
  return (
    <div className='relative'>
        <div className='lg:flex'>
            <div className='p-3 flex items-center gap-4'>
                <Button onClick={()=>handleCategory("all")} variant={category=="all"?"default":"outline"} className="rounded-full">All</Button>
                <Button onClick={()=>handleCategory("top50")} variant={category=="top50"?"default":"outline"} className="rounded-full">Top 50</Button>
                <Button onClick={()=>handleCategory("topGainers")} variant={category=="topGainers"?"default":"outline"} className="rounded-full">Top Gainers</Button>
                <Button onClick={()=>handleCategory("topLosers")} variant={category=="topLosers"?"default":"outline"} className="rounded-full">Top Losers</Button>
            </div>
        </div>
        <Assettable></Assettable>
    </div>
  )
}

export default Home
