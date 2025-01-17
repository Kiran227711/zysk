import img1 from "../assets/avatar.png";
import img2 from "../assets/logo1.png";
import img3 from "../assets/avatar.png";
import {CircleMinus,CirclePlus} from "lucide-react";
import { useState } from "react";


const QuestionSection = () => {
   const [mobileDrawerOpen1,setMobileDrawerOpen1]=useState(false);
   const [mobileDrawerOpen2,setMobileDrawerOpen2]=useState(false);
   const [mobileDrawerOpen3,setMobileDrawerOpen3]=useState(false);
   const [mobileDrawerOpen4,setMobileDrawerOpen4]=useState(false);
   const [mobileDrawerOpen5,setMobileDrawerOpen5]=useState(false);
   const [mobileDrawerOpen6,setMobileDrawerOpen6]=useState(false);
      const toggleNavbar1 = ()=>{
          setMobileDrawerOpen1(!mobileDrawerOpen1);
      };
      const toggleNavbar2 = ()=>{
        setMobileDrawerOpen2(!mobileDrawerOpen1);
    };
    const toggleNavbar3 = ()=>{
      setMobileDrawerOpen3(!mobileDrawerOpen1);
  };
  const toggleNavbar4 = ()=>{
    setMobileDrawerOpen4(!mobileDrawerOpen1);
};
const toggleNavbar5 = ()=>{
  setMobileDrawerOpen5(!mobileDrawerOpen1);
};
const toggleNavbar6 = ()=>{
  setMobileDrawerOpen6(!mobileDrawerOpen1);
};
  return (
    <section class="frq-sec">
      <div class="frq-sec-hed">
        <div class="frq-heading">
        <h2>Frequently asked questions</h2>
        </div>
        <div class="frq-para">
            <p>Everything you need to know about the product and billing</p>
        </div>
      </div>
      <div class="frq-sec-qsn">
        <div class="frq-sec-qsns">
          <div className="w-[100%]">
            <div class="qsn1">

              <div>
              <h1 className="text-base font-normal">Is there a free trial available?</h1>
              </div>
              
              <div>
              <button className="w-[24px] h-[24px]" onClick={toggleNavbar1}>
                {mobileDrawerOpen1? <CircleMinus/>:<CirclePlus/>}
            </button>
              </div>
            
            </div>
            {mobileDrawerOpen1 &&
      (
              <p className="md:flex text-base font-normal text-[#475467]">Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</p>
      )}
            </div>
          <div className="w-[100%]">
            <div class="qsn1">
              <h1 className="text-base font-normal">Can I change my plan later?</h1>
            <button className="w-[24px] h-[24px]" onClick={toggleNavbar2}>
                {mobileDrawerOpen2? <CircleMinus/>:<CirclePlus/>}
            </button>
            </div>
              </div>
          <div className="w-[100%]">
            <div class="qsn1">
              <h1 className="text-base font-normal">What is your cancellation policy?</h1>
            <button className="w-[24px] h-[24px]" onClick={toggleNavbar3}>
                {mobileDrawerOpen3? <CircleMinus/>:<CirclePlus/>}
            </button>
            </div>
              </div>
          <div className="w-[100%]">
            <div>
            <div class="qsn1">
              <h1 className="text-base font-normal">Can other info be added to an invoice?</h1>
            <button className="w-[24px] h-[24px]" onClick={toggleNavbar4}>
                {mobileDrawerOpen4? <CircleMinus/>:<CirclePlus/>}
            </button>
            </div>
            </div>
            
              </div>
          <div className="w-[100%]">
         
            <div class="qsn1">
              <h1 className="text-base font-normal">How does billing work?</h1>
            <button className="w-[24px] h-[24px]" onClick={toggleNavbar5}>
                {mobileDrawerOpen5? <CircleMinus/>:<CirclePlus/>}
            </button>
            </div>
              </div>
          <div className="w-[100%]">
            <div class="qsn1">
              <h1 className="text-base font-normal">How do I change my account email?</h1>
            <button className="w-[24px] h-[24px]" onClick={toggleNavbar6}>
                {mobileDrawerOpen6? <CircleMinus/>:<CirclePlus/>}
            </button>
            </div>
              </div>
        </div>
      </div>
      <div class="frq-sec-lst">
        <div class="frq-img">
            <img class="img1" src={img1} alt="img"/>
            <img class="img2" src={img2} alt="img"/>
            <img class="img3" src={img3} alt="img"/>
        </div>
        <div class="frq-qsn">
            <div>
                <h2>Still have questions?</h2>
            </div>
            <div>
                <p>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
            </div>
        </div>
        <div class="frq-btn">
            <button>Get in touch</button>
        </div>
      </div>
      

    </section>
  )
}

export default QuestionSection
