import KanbasNavigation from "../../KanbasNavigation/KanbasNavigation.js";
import CourseNavigation from "../CourseNavigation/CourseNavigation.js";
import CourseStatus from "./CourseStatus.js";
import module from "./module.js";  
import BlackNavigation from "./BlackNavigation.js"; 
import buttons from "./Buttons.js";





function Home(){
    return  `
      <div class = "wd-flex-row-container ">
       
       <div class ="d-none d-md-block wd-kanbas-navaigation">
          ${KanbasNavigation("Courses")} 
        </div>


        <div class= "d-none d-md-block" >     
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb d-flex align-items-center">
                <i class="fa fa-bars ms-2 me-2" aria-hidden="true"></i>
                <li class="breadcrumb-item ml-5"><a href="#">CS4550.12631.202410</a></li>
                <li class="breadcrumb-item active" aria-current="page">Home</li>
            </ol>
          </nav>
          ${CourseNavigation("Home")}
        </div>

       
      
  <div>    
        
      <div class="d-block d-md-none">
          ${BlackNavigation()}
        </div>

        <div class="d-none d-md-block">
        ${buttons()}
        </div> 
        
        ${module()}
    
      <div>  

      ${CourseStatus()}

   </div>

   

</div>
`;
}
export default Home;


