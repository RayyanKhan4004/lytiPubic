import PublicFooter from "./components/PublicFooter"
import PublicHeadings from "./components/PublicHeadings"
import PublicNavbar from "./components/PublicNavbar"
import PublicRealtor from "./components/PublicRealtor"
import PublicTestimonial from "./components/PublicTestimonial"
import PublicWhyChoseus from "./components/PublicWhyChoseus"
import bg from "./components/assets/BgBoxes.svg"
function PublicDashBoard() {
  const card1 = [   
    {num : 15.5 ,
      text: "Total Gross Commission"
    },
    {num : 15.5 ,
      text: "Total Gross Commission"
    },
    {num : 15.5 ,
      text: "Total Gross Commission"
    },
  ]
  const card2 = [
    {num : 15.5 ,
      text: "Total Gross Commission"
    },
    {num : 15.5 ,
      text: "Total Gross Commission"
    },
    {num : 15.5 ,
      text: "Total Gross Commission"
    },
  ]
  return (
    <div>
     <PublicNavbar/>
     <PublicHeadings />
      <PublicTestimonial/>
      <div className="relative">
      <img src={bg} alt="" className="absolute top-0 left-0 w-full h-full -z-10" />
      <div className="p-15  gap-[50px] flex flex-col justify-center"> 
       
        
        <h1 className="font-poppin font-semibold text-[40px] mb-[10px] flex flex-row justify-start">Why Choose Us</h1>
        <div className="flex flex-col gap-[30px]">
          
        <div className="flex justify-start gap-[20px]">

        {
        card2.map((item , ind)=>(
          <PublicWhyChoseus  ind={ind} number={item.num} text={item.text}/>
        ))
      }

        </div>
        <div className="flex justify-end gap-[20px]">

        {
        card1.map((item , ind)=>(
          <PublicWhyChoseus  ind={ind} number={item.num} text={item.text}/>
        ))
      }

        </div>
        </div>
      </div>
   
    </div>
 
      <PublicRealtor/>
      
      <PublicFooter/>
    </div>
  )
}

export default PublicDashBoard
