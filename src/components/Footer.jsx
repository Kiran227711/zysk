import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <section class="main-foot">
     <div class="foot-sec1">
        <div class="ftlink-1">
          <div class="ftlink">
             <p>Products</p>
             <ul class="ftlink-lst">
                <li>Over</li>
                <li>Feature</li>
                <li>Tutorials</li>
                <li>Solutions</li>
                <li>Pricing</li>
                <li>Releases</li>
             </ul>
          </div>
          <div class="ftlink">
             <p>Company</p>
              <ul class="ftlink-lst">
                <li>About us</li>
                <li>Careers</li>
                <li>Press</li>
                <li>News</li>
                <li>Media kit</li>
                <li>Contact</li>
              </ul>
           </div>
        </div>
       
       <div class="ftlink-1">
           <div class="ftlink">
               <p>Resources</p>
             <ul class="ftlink-lst">
                <li>Blog</li>
                <li>Newsletter</li>
                <li>Events</li>
                <li>Help centre</li>
                <li>Tutorials</li>
                <li>Support</li>
              </ul>
          </div>
          <div class="ftlink">
             <p>Use cases</p>
             <ul class="ftlink-lst">
                <li>Startups</li>
                <li>Enterprise</li>
                <li>Government</li>
                <li>SaaS centre</li>
                <li>Marketplaces</li>
                <li>Ecommerce</li>
              </ul>
          </div>
       </div>
        
     <div class="ftlink-1">
          <div class="ftlink">
             <p>Social</p>
             <ul class="ftlink-lst">
                <li>Twitter</li>
                <li>LinkedIn</li>
                <li>Facebook</li>
                <li>GitHub</li>
                <li>AngelList</li>
                <li>Dribbble</li>
             </ul>
          </div>
          <div class="ftlink">
              <p>Legal</p>
             <ul class="ftlink-lst">
                <li>Terms</li>
                <li>Privacy</li>
                <li>Cookies</li>
                <li>Licenses</li>
                <li>Settings</li>
                <li>Contact</li>
              </ul>
         </div>
     </div>

     </div>
      <div class="foot-sec2">
        <div class="zysklogo">
            <img src={logo} alt="logo"/>
        </div>
        <div class="copyright">
            <p>© 2077 zysktechnologies. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}

export default Footer
