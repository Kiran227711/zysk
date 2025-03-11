import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
function Buttons() {
  return (
    <div class="btns-1"className="flex justify-center items-center  max-[767px]:h-[108px] max-[767px]:w-[100%] ">
        <div class="btns"className="flex justify-between w-[220px] max-[767px]:block max-[767px]:w-[90%]">
            <button id="dm"className="border w-[100px] h-[50px] flex justify-center items-center rounded-[25px] border-solid border-[#D0D5DD] max-[767px]:w-[100%]"><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 512 512"><path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/></svg> Demo</button><button id="sn"className="bg-[#E63F3A] text-[white] w-[100px] h-[50px] rounded-[25px] max-[767px]:w-[100%]">Signup</button>
         </div>
    </div>
  )
}

export default Buttons
