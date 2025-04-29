import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import Assettable from './Assettable'
import StockChart from './StockChart'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { DonutIcon, MessageCircle } from 'lucide-react'
import { Cross1Icon, DotIcon } from '@radix-ui/react-icons'
import { Input } from '@/components/ui/input'

function Home() {
    const [category,setcategory]=useState("all")
    const [inputValue,setInputValue]=useState("")
    const [isBotRelease,setIsBotRelease]=useState(false)
    const handleBotRelease=()=>{
        setIsBotRelease(!isBotRelease)
    }
    const handleCategory=(value)=>{
        setcategory(value)
    }
    const handleChange=(e)=>{
        setInputValue(e.targate.value)
    }
    const handleKeyPress=(e)=>{
        if(e.key=="Enter"){
            console.log(inputValue)
        }
        setInputValue("")
    }
  return (
    <div className='relative'>
        <div className='lg:flex'>
            <div  className='lg:w-[50%] lg:border-r'>
                <div className='p-3 flex items-center gap-4'>
                    <Button onClick={()=>handleCategory("all")} variant={category=="all"?"default":"outline"} className="rounded-full">All</Button>
                    <Button onClick={()=>handleCategory("top50")} variant={category=="top50"?"default":"outline"} className="rounded-full">Top 50</Button>
                    <Button onClick={()=>handleCategory("topGainers")} variant={category=="topGainers"?"default":"outline"} className="rounded-full">Top Gainers</Button>
                    <Button onClick={()=>handleCategory("topLosers")} variant={category=="topLosers"?"default":"outline"} className="rounded-full">Top Losers</Button>
                </div>
                <Assettable></Assettable>
            </div>
                <div className='hidden lg:block lg:w-[50%] p-5'>
                    <StockChart></StockChart>
                    <div className='flex gap-5 items-center' >
                        <div>
                            <Avatar>
                                <AvatarImage src={
                                    "https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628"}>

                                    </AvatarImage>
                            </Avatar>
                        </div>
                        <div>
                        <div className='flex items-center gap-2'>
                            <p>ETH</p>
                            <DotIcon className='text-gray-400'></DotIcon>
                            <p className='text-gray-400'>Ethereum</p>
                        </div>
                        <div className='flex items-end gap-2'>
                            <p className='text-xl font-bold'>5656</p>
                            <p className='text-red-600'>
                                <span>-1234567876543234.6543</span>
                                <span>(456765)</span>
                            </p>

                        </div>
                        </div>
                    </div>
                </div>
           
        </div>
        <section className='absolute bottom-5 right-5 z-40 flex flex-col justify-end items-end
        gap-2'>
           { isBotRelease &&<div className='rounded-md w-[20rem] md:w-[25rem] lg:w-[25rem] h-[70vh] bg-slate-900'>
                <div className='flex justify-between items-center border-b px-6 h-[12%]'>
                    <p>Chat Bot</p>
                    <Button onClick={handleBotRelease} variant="ghost" size="icon">
                        <Cross1Icon/>
                    </Button>
                </div>
                <div className='h-[76%] flex flex-col overflow-y-auto gap-5 px-5 py-2 scroll-container'>
                    <div className='self-start pb-5 w-auto'>
                        <div className='justify-end self-end px-5 py-2 rounded-md  bg-slate-800 w-auto text-left' >
                            <p>hi ,Raam Arora </p>
                            <p>you can ask crypto related any question</p>
                            <p>like ,price ,market cap extra....</p>
                        </div>
                    </div>
                    
                    {
                        [1,1,1,1,1,1].map((item,i)=>(
                        <div key={i} className={ `${i%2 ?"self-start":"self-end"}
                         "pb-5 w-auto text-left"`}>
                            {i%2==0 ? <div className='justify-end self-end px-5 py-2 rounded-md  bg-slate-800 w-auto' >
                            <p>promt who are you</p>
                            
                        </div> :<div className='justify-end self-end px-5 py-2 rounded-md  bg-slate-800 w-auto' >
                            <p>ans hi ram</p>
                            
                        </div>}
                       
                      
                        
                    </div>
                ))}
                    
                </div>
                <div className='h-[12%] border-t'>
                    <Input className="w-full h-full order-none outline-none" placeholder="write promt" onChange={handleChange} vlaue={inputValue}
                    onKeyPress={handleKeyPress}></Input>
                </div>
            </div>}





            <div className='relative w-[10-rem] cursor-pointer group'>
                <Button
                onClick={handleBotRelease}
                className="w-full h-[3rem] gap-2 items-center">
                    <MessageCircle size={30} className='fill-[#1e293b] -rotate-90
                    stroke-none group-hover:fill-[#1a1a1a]'/>
                    <span className='text3xl'>chat Bot</span>
                </Button>
            </div>
        </section>
        
    </div>
  )
}

export default Home
