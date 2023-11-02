import KanbasNavigation from "../../KanbasNavigation/KanbasNavigation.js";
import AccountNavigation from "./AccountNavigation.js";


function Home(){
    return  `<div class = "d-block d-md-none"> 
      <a href = "/Kanbas/KanbasNavigation/index.html">kanbas navigation</a>
      <a href = "/Kanbas/Courses/CourseNavigation/index.html">course navigation</a>
           
        </div>
   
        <div class = "wd-flex-row-container  ">
            <div class ="wd-kanbas-navaigation  d-none d-md-block">
              ${KanbasNavigation("Account")} 
              </div>

    <div >
               ${AccountNavigation("Profile")}
    </div>
    

       <div>
       <div class="container">
       <!-- User Icon and Name -->
       <div class="user-section">
           <i class="fa fa-user fa-5x"></i>  <!-- FontAwesome's user icon -->
           <h2>wenhu cheng</h2>
       </div>
   
     <br/>
   
       <!-- Contact Section -->
       <div class="contact-section">
           <h3>Contact</h3>
           <p>No registered services, you can add some on the <a href="settings_url">settings page</a>.</p>
       </div>
    <br/>  <br/>
       <!-- Biography Section -->
       <div class="bio-section">
           <h3>Biography</h3>
           <p>Faculty, Software Engineer, AI, Space, and renewables enthusiast.</p>
       </div>
       <br/>  <br/>
       <!-- Links Section -->
       <div class="links-section">
           <h3>Links</h3>
           <a href="https://youtube.com/link_to_channel" target="_blank">
               <i class="fa fa-youtube"></i> YouTube
           </a>
       </div>
   </div>

  
   
    

      </div>
      <div>
      <!-- Edit Profile Button -->
      <a href="/Kanbas/Account/Profile/EditProfile/screen.html">
      <button class="btn btn-outline-secondary">
          <i class="fa fa-pencil"></i> Edit Profile
      </button>
      </a>
      </div>
</div>
`;
}
export default Home;