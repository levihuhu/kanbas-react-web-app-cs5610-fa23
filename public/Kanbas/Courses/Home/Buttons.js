function buttons(){

return `
<div col-lg-4 col-md-4 col-sm-12>
         
    <div class="mb-3 float-end  " style="margin-left: -450px;" >
        <button class="btn btn-secondary">Collapse All</button>
        <button class="btn btn-secondary">View Progress</button>
        <div class="btn-group">
            <button class="btn btn-danger dropdown-toggle" data-toggle="dropdown">Publish All</button>
            <div class="dropdown-menu">
                <!-- Dropdown content can be added here -->
            </div>
        </div>
        <button class="btn btn-success"><i class="fa fa-plus" aria-hidden="true"></i> Module</button>
    </div>
</div>`;

}
export default buttons;