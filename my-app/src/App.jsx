import { useState } from 'react'
import { Button } from './components/ui/button';
import Home from './page/Home/Home';
import './App.css'
import Navbar from './page/Navbar/Navbar';
import { Contact } from 'lucide-react';
import Protfolio from './page/portfolio/Protfolio';
import Activity from './page/activity/Activity';
import Waller from './page/wallet/Wallet';
import Wallet from './page/wallet/Wallet';
import Withdrawal from './page/withdrawal/Withdrawal';
import PaymentDetails from './page/paymentdatils/PaymentDetails';
import StockDetails from './page/stockdetail/StockDetails';
import WatchList from './page/watchList/WatchList';
import Profile from './page/profile/Profile';
import SerchCoin from './page/serchingcoin/SerchCoin';
import NotFound from './page/notfound/NotFound';
import { Route, Routes } from 'react-router-dom';

function App() {
  

  return (
    <>
    
     <Navbar></Navbar>
     <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/portfolio" element={<Protfolio></Protfolio>}/>
        <Route path="/activity" element={<Activity></Activity>}/>
        <Route path="/wallet" element={<Wallet></Wallet>}/>
        <Route path="/withdrawal" element={<Withdrawal></Withdrawal>}/>
        <Route path="/payment-details" element={<PaymentDetails></PaymentDetails>}/>
        <Route path="/market/:id" element={<StockDetails></StockDetails>}/>
        <Route path="/watchlist" element={<WatchList></WatchList>}/>
        <Route path="/profile" element={<Profile></Profile>}/>
        <Route path="/serch" element={<SerchCoin></SerchCoin>}/>
        <Route path="*" element={<NotFound></NotFound>}/>
      
        
     </Routes>
     
    </>
  )
}

export default App
