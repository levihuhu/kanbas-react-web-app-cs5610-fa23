import KanbasNavigation from "/Kanbas/KanbasNavigation/KanbasNavigation.js";
import CourseNavigation from "/Kanbas/Courses/CourseNavigation/CourseNavigation.js";
import index from "./index.js";






function Home(){
    return  `
      <div class = "wd-flex-row-container  ">
       
       <div class ="d-none d-md-block wd-kanbas-navaigation">
          ${KanbasNavigation("Courses")} 
        </div>
        <div class= "d-none d-md-block" >     
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb d-flex align-items-center">
                <i class="fa fa-bars ms-2 me-2" aria-hidden="true"></i>
                <li class="breadcrumb-item ml-5"><a href="#">CS4550.12631.202410</a></li>
                <li class="breadcrumb-item active" aria-current="page">Settings</li>
            </ol>
          </nav>
          ${CourseNavigation("Settings")}
        </div>
      
  <div class = "ml-auto larger-container" style = "margin-left:50px">    
        
  ${index()}
     </div>

</div>
`;
}
export default Home;




