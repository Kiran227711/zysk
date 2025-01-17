import logo7 from "../assets/logos7.png";
import img from "../assets/avatar.png";
const TestimonialSection = () => {
  return (
    <section class="comment">
      <div class="comment-box">
        <div class="comment-logo">
            <img src={logo7} alt="logo"/>
        </div>
        <div class="comment-hed">
            <h2>We’ve been using Untitled to kick start every new project and can’t imagine working without it.</h2>
        </div>
        <div class="comment-logo1">
            <img src={img} alt="img"/>
        </div>
        <div class="comment-hed1">
            <h2>Candice Wu</h2>
        </div>
        <div class="comment-para">
            <p>Product Manager, Sisyphus</p>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection
