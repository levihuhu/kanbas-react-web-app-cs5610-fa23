import KanbasNavigation from "/Kanbas/KanbasNavigation/KanbasNavigation.js";
import card from "/Kanbas/DashBoard/card.js";


function Home(){
    
    return  `<div class = "d-block d-md-none"> 
      <a href = "/Kanbas/KanbasNavigation/index.html">kanbas navigation</a>
      <a href = "/Kanbas/Courses/CourseNavigation/index.html">course navigation</a>
           
        </div>
   
        <div class = "wd-flex-row-container  ">
            <div class ="wd-kanbas-navaigation  d-none d-md-block">
              ${KanbasNavigation("DashBoard")} 
              </div>

    <div> 
    <br/>
    <h1 style="color:grey;">Dashboard</h1>
    <h5>Published Course(24)</h5>
           ${card()}   
    </div>
       <div>
            
     
    </div>`;
}
export default Home;