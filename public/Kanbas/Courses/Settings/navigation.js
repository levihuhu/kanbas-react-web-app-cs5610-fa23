import KanbasNavigation from "/Kanbas/KanbasNavigation/KanbasNavigation.js";
import CourseNavigation from "/Kanbas/Courses/CourseNavigation/CourseNavigation.js";







function navigation(){
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
      
  <div class = "ml-auto " style = "margin-left:50px">    
        

     </div>
     <div class="container mt-20" >
    <ul class="nav nav-tabs">
      
        <li class="nav-item">
            <a class="nav-link " href="./screen.html" data-toggle="tab">Course Details</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#sections" data-toggle="tab">Sections</a>
        </li>
        <li class="nav-item ">
            <a class="nav-link active" href="./navigation.html" data-toggle="tab">Navigation</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#apps" data-toggle="tab">Apps</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#featureOptions" data-toggle="tab">Feature Options</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#integrations" data-toggle="tab">Integrations</a>
        </li>
    </ul>
    <div>
    <div class="container" style="margin-right:300px">
    <p>Drag and drop items to reorder them in the course navigation.</p>

    <ul class="list-group mb-5">
        <li class="list-group-item d-flex justify-content-between align-items-center">
            Home
            <span>::</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
            Home
            <span>::</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
            Home
            <span>::</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
            Home
            <span>::</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
            Home
            <span>::</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
            Home
            <span>::</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
            Home
            <span>::</span>
        </li>
        <!-- ... add other items here ... -->
        <li class="list-group-item d-flex justify-content-between align-items-center">
            Panopto Video
            <span>::</span>
        </li>
    </ul>

    <p>Drag items here to hide them from students.<br>
    Disabling most pages will cause students who visit those pages to be redirected to the course home page.</p>

    <ul class="list-group" >
        <li class="list-group-item d-flex justify-content-between align-items-center">
            Chat
            <span class="text-muted">Page disabled, won't appear in navigation</span>
            <span>::</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
            Chat
            <span class="text-muted">Page disabled, won't appear in navigation</span>
            <span>::</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
            Chat
            <span class="text-muted">Page disabled, won't appear in navigation</span>
            <span>::</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
            Chat
            <span class="text-muted">Page disabled, won't appear in navigation</span>
            <span>::</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
            Chat
            <span class="text-muted">Page disabled, won't appear in navigation</span>
            <span>::</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
            Chat
            <span class="text-muted">Page disabled, won't appear in navigation</span>
            <span>::</span>
        </li>
        <!-- ... add other disabled items here ... -->
        <li class="list-group-item d-flex justify-content-between align-items-center">
            Top Hat
            <span class="text-muted">Page disabled, won't appear in navigation</span>
            <span>::</span>
        </li>
    </ul>
</div>


</div>
`;
}
export default navigation;
