function CourseStatus(){
    return `

    <div class="container mt-5 d-none d-lg-block" style="width: 235px;margin-left:20px">
    <h4 class="mt-0" style="margin-top:20px">Course Status</h4>
    <div class="list-group">

    <div class="list-group-item d-flex align-items-center">
<i class="fa fa-times mr-2" aria-hidden="true"></i> 
Unpublish
<span class="badge bg-success ml-2">
   <i class="fa fa-check" aria-hidden="true"></i> Published
</span>
</div>
<div class="list-group-item">
   <i class="fa fa-download" aria-hidden="true"></i> Import Existing Content
</div>
<div class="list-group-item">
   <i class="fa fa-download" aria-hidden="true"></i> Import from Commons
</div>
<div class="list-group-item">
   <i class="fa fa-home" aria-hidden="true"></i> Choose Home Page
</div>
<div class="list-group-item">
   <i class="fa fa-eye" aria-hidden="true"></i> View Course Stream
</div>
<div class="list-group-item">
   <i class="fa fa-bell" aria-hidden="true"></i> New Announcement
</div>
<div class="list-group-item">
   <i class="fa fa-bar-chart" aria-hidden="true"></i> New Analytics
</div>
<div class="list-group-item">
   <i class="fa fa-bell-o" aria-hidden="true"></i> View Course Notifications
</div>
</div>
</div>`;
}
export default CourseStatus;