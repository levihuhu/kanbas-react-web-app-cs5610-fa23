import KanbasNavigation from "/Kanbas/KanbasNavigation/KanbasNavigation.js";
import CourseNavigation from "/Kanbas/Courses/CourseNavigation/CourseNavigation.js";
import AssignmentEditor from "./AssignmentEditor.js";






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
                <li class="breadcrumb-item active" aria-current="page"> >Assignments</li>
                <li class="breadcrumb-item active" aria-current="page"> >A1 ENV</li>
             
            </ol>
          </nav>
          ${CourseNavigation("Assignments")}
        </div>
      
  <div class = "ml-10">    
        
  ${AssignmentEditor()}
     </div>

</div>
`;
}
export default Home;
