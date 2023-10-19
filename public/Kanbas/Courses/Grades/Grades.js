import KanbasNavigation from "/Kanbas/KanbasNavigation/KanbasNavigation.js";
import CourseNavigation from "/Kanbas/Courses/CourseNavigation/CourseNavigation.js";
import index from "./index.js";


function Grades(){
return `
<div class = "wd-flex-row-container">
    ${KanbasNavigation("Courses")}
<div >
<ul class ="wd-course-navigation">

   ${CourseNavigation("Grades")}
</div>

<div>

${index()}
</div>
</div>
`;
}
export default Grades;









