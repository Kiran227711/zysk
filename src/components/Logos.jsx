import logos1 from "../assets/logos1.png";
import logos2 from "../assets/logos2.png";
import logos3 from "../assets/logos3.png";
import logos4 from "../assets/logos4.png";
import logos5 from "../assets/logos5.png";
import logos6 from "../assets/logos6.png";

function Logos() {
  return (
    <section class="logo-sec">
      <div class="logo-para">
        <p id="para2">Join 4,000+ companies already growing</p>
      </div>
      <div class="logo-img">
        <div class="logo-img-div">
        <img className="logs" src={logos2} alt="logo"/>
        </div>
        <div class="logo-img-div">
        <img className="logs" src={logos1} alt="logo"/>
        </div>
        <div class="logo-img-div">
        <img className="logs" src={logos3} alt="logo"/>
        </div>
        <div class="logo-img-div">
        <img className="logs" src={logos4} alt="logo"/>
        </div>
        <div class="logo-img-div">
        <img className="logs" src={logos5} alt="logo"/>
        </div>
        <div class="logo-img-div">
        <img className="logs" src={logos6} alt="logo"/>
        </div>
      </div>
    </section>
  )
}

export default Logos
