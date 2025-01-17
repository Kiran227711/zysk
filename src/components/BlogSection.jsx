import blogimg1 from "../assets/blogimg3.jpg";
import blogimg2 from "../assets/blogimg1.png";
import blogimg3 from "../assets/blogimg2.jpg";
import bloglogo1 from "../assets/logo1.png";


const BlogSection = () => {
  return (
    <section class="blog-sec">
      <div class="blog-sec1">
        <div class="blog-sec1-1">
          <div>
            <h3 className="text-[#E63F3A] text-base leading-6 font-semibold w-[768px]">Our Blog</h3>
          </div>
          <div>
            <h1 className="text-[#101828] text-4xl leading-[44px] font-semibold w-[768px]">Lastest blog posts</h1>
          </div>
          <div>
            <p className="text-[#475467] text-xl leading-[26px] font-normal w-[768px]">Tool and strategies modern teams need to help their companies grow</p>
          </div>

         </div>
         <div className="w-[139.79px]">
          <button className="border w-[140px] h-[48px] rounded-[5px] text-base bg-[#E63F3A] text-[white]" >View all post</button>
         </div>

        </div>
       <div class="blog-sec-1-2">
        <div class="blogfst">
          <div className="w-384px h-240px" >
            <img className="w-384px h-240px" src={blogimg1} alt="img"/>
          </div>
          <div class="bsec1">
           <div>
            <h3 className="text-[#E63F3A] text-base leading-6 font-semibold">Design</h3>
           </div>
            <div>
            <h1 className="text-[#101828] text-2xl leading-[44px] font-semibold ">UX review presentations</h1>
            </div>
            <div>
            <p className="text-[#475467] text-base leading-[26px] font-normal">How do you create compelling presentations that wow your colleagues and impress your managers?</p>
            </div>
            <div class="bsec2">
            <div class="blog1-logo">
              <img src={bloglogo1} alt="img"/>
            </div>
            <div>
              <h3>Olive</h3>
              <p>20 JAN 2024</p>
             </div>
            </div>
            </div>
           </div>
            <div class="blogfst">
             <div className="w-384px h-240px">
                 <img className="w-384px h-240px" src={blogimg2} alt="img"/>
             </div>
          <div class="bsec1">
          <div>
            <h3 className="text-[#E63F3A] text-base leading-6 font-semibold ">Products</h3>
          </div>
          <div>
            <h1 className="text-[#101828] text-2xl leading-[44px] font-semibold ">Migrating to Linear 101</h1>
          </div>
          <div>
            <p className="text-[#475467] text-base leading-[26px] font-normal">Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.</p>
          </div>
          <div class="bsec2">
            <div class="blog1-logo">
              <img src={bloglogo1} alt="img"/>
            </div>
            <div>
              <h3>Olive</h3>
              <p>20 JAN 2024</p>
            </div>
          </div>
          </div>
        </div>
        <div className="w-[280px] h-[444px] flex justify-between flex-wrap">
        <div>
            <img src={blogimg3} alt="img"/>
          </div>
          <div>
          <div>
            <h3 className="text-[#E63F3A] text-base leading-6 font-semibold ">Software Engineering</h3>
          </div>
          <div>
            <h1 className="text-[#101828] text-2xl leading-[44px] font-semibold ">Building your API stack</h1>
          </div>
          <div>
            <p className="text-[#475467] text-base leading-[26px] font-normal">The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.</p>
          </div>
          <div className="flex w-[165px] h-[40] justify-between mt-5">
            <div class="blog1-logo">
              <img src={bloglogo1} alt="img"/>
            </div>
            <div>
              <h3>Olive</h3>
              <p>20 JAN 2024</p>
            </div>
          </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default BlogSection
