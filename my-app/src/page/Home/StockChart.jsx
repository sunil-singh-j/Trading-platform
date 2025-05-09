import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'

const StockChart = () => {
    const [activeLabel,setActiveLable]=useState("1 day")
    console.log(activeLabel)
    const timeSeries=[
        {
            keyword:"DGITAL_CURRENCEY_WEEKLY",
            key:'Weekly Time Series',
            label:"1 Day",
            values:1,
        },
        {
            keyword:"DGITAL_CURRENCEY_WEEKLY",
            key:'Weekly Time Series',
            label:"1 Week",
            values:7,
        },
        {
            keyword:"DGITAL_CURRENCEY_WEEKLY",
            key:'Weekly Time Series',
            label:"1 Month",
            values:7,
        }
    ]
    const series=[
        {
            data:[[1742403890905, 84590.9687216577],
            [1742407488509, 84258.5623762474],
            [1742411085580, 85888.9936638155],
            [1742414690222, 85452.5427337137],
            [1742418273933, 85343.765991886],
            [1742421889130, 85629.4066802345],
            [1742425493861, 86185.4114378591],
            [1742429096352, 86815.441094707],
            [1742432733760, 86023.0279369014],
            [1742436263058, 85865.4697769136],
            [1742439673197, 86081.3225180511],
            [1742443580572, 85924.8586395996],
            [1742447773222, 85636.4698965906],
            [1742451810852, 85894.5754091071],
            [1742454283368, 85779.6594742458],
            [1742457880385, 85846.6064554198],
            [1742461761861, 86229.6796350839],
            [1742465096892, 85882.7039898859],
            [1742468985527, 85222.6329745138],
            [1742472570931, 85380.3316191466],
            [1742475888987, 85310.9681428484],
            [1742479478923, 85504.9440078867],
            [1742483258884, 85405.1565735153],
            [1742486691036, 84683.8884862282],
            [1742490157273, 83735.8732488119],
            [1742493872534, 84006.0348206754],
            [1742497528951, 84040.2554326733],
            [1742500913316, 84134.3914142761],
            [1742504852669, 84531.1908542976],
            [1742508288566, 84309.6571517077],
            [1742511897112, 84087.1829544377],
            [1742515636021, 84326.2346082892],
            [1742519095872, 84473.8179802995],
            [1742522691821, 84743.3924986277],
            [1742526246012, 84634.4669596086],
            [1742529895452, 84474.6663396798],
            [1742533429726, 84630.8504676616],
            [1742537081835, 84437.7667572769],
            [1742540791572, 84179.2358451116],
            [1742544136823, 83881.9367687925],
            [1742547896072, 83989.6053543693],
            [1742551293900, 84094.7176312472],
            [1742554871378, 84153.4248494518],
            [1742558967011, 84090.3741837216],
            [1742562568668, 83378.3060676143],
            [1742565873272, 83962.6562833777],
            [1742569789697, 84086.2707018131],
            [1742573388273, 83441.7335513177],
            [1742576699819, 84061.4207521501],
            [1742580280575, 83979.4455154189],
            [1742584175355, 83969.0734793486],
            [1742587480747, 83956.0619016416],
            [1742591092393, 84195.3501419867],
            [1742594690392, 84331.0891265288],
            [1742598077806, 84143.3705534662],
            [1742601900207, 84009.532917822],
            [1742605511252, 84167.8697252113],
            [1742609210265, 84014.1930388467],
            [1742612697034, 84158.9894180212],
            [1742616293997, 84228.4931007714],
            [1742619881205, 84349.5325023787],
            [1742623366938, 84267.5994473158],
            [1742627089989, 84314.716378168],
            [1742630853014, 84238.8683759299],
            [1742634091570, 84203.2073485589],
            [1742637834953, 84346.3661567513],
            [1742641483065, 84392.820097211],
            [1742645050151, 84208.9872331281],
            [1742648695227, 84212.3961515231],
            [1742652327025, 84148.9958208313],
            [1742655652609, 84003.4276829759],
            [1742659240710, 84106.9952787587],
            [1742663268007, 84112.4673243155],
            [1742666432867, 84228.2746239769],
            [1742670313389, 84228.9521730138],
            [1742673890124, 84164.286334733],
            [1742677496272, 83914.1349080918],
            [1742681097312, 83994.8052565371],
            [1742684696175, 83948.8043741348],
            [1742688296860, 83823.012451261],
            [1742691704609, 83994.7365064102],
            [1742695485378, 84054.1041073491],
            [1742698913072, 84220.4085173365],
            [1742702687779, 84199.3779941985],
            [1742706574802, 84125.9747467716],
            [1742709897079, 84204.783088957],
            [1742713489362, 84255.4801258253],
            [1742717375553, 84281.4757222022],
            [1742720694939, 84338.9295904646],
            [1742724583596, 84308.2619639284],
            [1742727887110, 84445.1498631712],
            [1742731349342, 84658.5970173952],
            [1742735090300, 84705.0272672479],
            [1742738690859, 85060.6125546185],
            [1742742513578, 84946.5222043805],
            [1742746470962, 85149.7274436795],
            [1742749782266, 85371.1391031313],
            [1742753385764, 84954.7563445952],
            [1742756822661, 84930.8143015377],
            [1742760098964, 85011.0087766871],
            [1742763985198, 85050.6575937366],
            [1742767486735, 85194.1481379247],
            [1742771128734, 85396.2904182631],
            [1742774690591, 86114.3337045651],
            [1742778403288, 85858.2775165714],
            [1742781960414, 85560.239561488],
            [1742785483755, 85883.039117483],
            [1742789095539, 86587.0081708596],
            [1742792689483, 86894.0765004288],
            [1742796360777, 86946.04244662],
            [1742799789256, 87126.5679940109],
            [1742803770685, 87083.940172667],
            [1742807065158, 87419.9071984332],
            [1742810692924, 87172.8898054925],
            [1742814297114, 87807.2886629017],
            [1742817939697, 87686.1713853651],
            [1742821476379, 87346.7599869987],
            [1742825382611, 88039.639377386],
            [1742828693797, 87952.7322652746],
            [1742832292429, 88339.8903592466],
            [1742835873095, 88015.4532702086],
            [1742839488419, 88462.8639341413],
            [1742843085767, 88474.3135894229],
            [1742846698636, 88259.7639577731],
            [1742850288266, 87866.174869463],
            [1742853739480, 88188.3401575141],
            [1742857681895, 87355.1533355981],
            [1742861135024, 87404.8764906821],
            [1742864672481, 87622.7845910459],
            [1742868274878, 87132.1673477141],
            [1742871879460, 86869.5046220286],
            [1742875486977, 86427.6503342531],
            [1742878827507, 86436.2290521335],
            [1742882686330, 86671.2526825006],
            [1742886300079, 86618.2284050763],]
        }
        
    ]

    const options = {
        chart: {
            id: "area-datetime",
            type: "area",
            height: 400,
            zoom: {
                autoScaleYaxis: true
            }
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            type: "datetime",
            tickAmount: 6
        },
        colors: ["#758AA2"],
        markers: {
            colors: ["#fff"],
            strokeColor: "#fff",
            strokeWidth: 1,
            size: 0,
            strokeDashArray: 0
        },
        tooltip: {
            theme: "dark"
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                stops: [0, 100]
            }
        },
        grid: {
            borderColor: "#47535E",
            strokeDashArray: 4,
            show: true
        }
    };
    
    const handelActiveLabel=(value)=>{
        console.log("clickeddd")
        setActiveLable(value)
        console.log(activeLabel)
    }
  return (
    <div>
        <div className='space-x-3'>
            {timeSeries.map((item,index)=>< Button variant={activeLabel==item.label?"default":"outline"}
             onClick={()=>handelActiveLabel(item.label)} key={item.label}>
                {item.label}
            </Button>)}
        </div>
        <div id='chart-timelines'>
        <ReactApexChart
            options={options}
            series={series}
            type='area'
            
        />
        </div>
    </div>
  )
}

export default StockChart
