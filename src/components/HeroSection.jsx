import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeroSection = () => {
  return (
    <section class="herosec" className=" w-full h-[300px] mt-2.5 pt-[50px] max-[767px]:h-[402px]">
        <div class="sec1" className="w-full flex justify-center items-center max-[767px]:w-[70%]">
            <div id="feature-btn" className="w-[450px] h-[50px] mt-2.5;max-[767px]:w-[250px]">
                <button class="btn1"className="border w-[450px] h-10 bg-[rgba(255,192,203,0.098)] text-[rgba(255,0,0,0.737)] flex justify-between items-center pl-[5px] pr-[15px] rounded-[25px] border-solid border-[pink]"><button class="btn1-1"className="border w-[150px] h-[30px] rounded-[25px] border-solid border-[rgb(248,163,177)]">New Feature</button>Check out the team dashboard<svg class="arw" xmlns="http://www.w3.org/2000/svg"height="20px" viewBox="0 0 448 512"><path fill="pink" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></button>
            </div>
        </div>
        <div class="sec1-1" className="w-full h-200px flex flex-wrap justify-center">
            <h2 id="title" className="text-[50px] font-semibold text-center">Beautiful analytics to grow smarter</h2>
            <div class="para1"className="w-[750px];">
             <p id="para" className="text-xl font-normal text-center">Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
            </div>
        </div>
    </section>
  );
};

export default HeroSection;
