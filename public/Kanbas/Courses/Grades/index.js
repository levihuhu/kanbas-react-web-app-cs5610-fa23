function index(){
    return `
    <div class="row mt-10 mb-5" style="width:1200px;">
    <div class="container">

    <!-- Separate row for Import and Export buttons -->
    <div class="row mb-3">
       
       
    <div class="col-md-4">     
    <nav aria-label="breadcrumb">
    <ol class="breadcrumb d-flex align-items-center">
        <i class="fa fa-bars ms-2 me-2" aria-hidden="true"></i>
        <li class="breadcrumb-item ml-5"><a href="#">CS4550.12631.202410</a></li>
        <li class="breadcrumb-item active" aria-current="page">Grades</li>
    </ol>
  </nav>
  </div>
        <div class="col-md-4"></div> <!-- Empty column to push buttons to the right -->
        
        <div class="col-md-4 d-flex justify-content-end">
            <button class="btn btn-secondary mr-2"><i class="fa fa-download" aria-hidden="true"></i> Import</button>
            <div class="btn-group">
                <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown">
                    <i class="fa fa-upload" aria-hidden="true"></i> Export
                </button>
                <!-- Dropdown content can be added here -->
                <i class="fa fa-cog fa-3x" aria-hidden="true"></i>
            </div>
        </div>
    </div>

    <!-- Separate row for Student Names and Assignment Names -->
    <div class="row mb-3">
        <div class="col">
            <h4>Student Names</h4>
           <input  type="text" class="form-control mb-2 "  placeholder="Search Students">  
          
          
           <button class="btn btn-outline-secondary">
                <i class="fa fa-filter" aria-hidden="true"></i> Apply Filters
           </button>
        </div>
        <div class="col">
            <h4>Assignment Names</h4>
            <div class="d-flex mb-2">
                <input type="text" class="form-control mr-2" placeholder="Search Assignments">
                <button class="btn btn-secondary"><i class="fa fa-pencil" aria-hidden="true"></i></button>
            </div>
        </div>
    </div>

    <div class="table-responsive">
    <table class="table table-striped">
        <thead>
            <tr>
                <th>Student Name</th>
                <th>A1 SETUP <br> Out of 100</th>
                <th>A2 HTML <br> Out of 100</th>
                <th>A3 CSS <br> Out of 100</th>
                <th>A4 BOOTSTRAP <br> Out of 100</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Doxa Asibey</td>
                <td>100%</td>
                <td>100%</td>
                <td>89.59%</td>
                <td>98.65%</td>
            </tr>
            <tr>
                <td>Thuy Tien Bui</td>
                <td>100%</td>
                <td>100%</td>
                <td>
                <div class="d-flex align-items-center" style="width:100px;">
                 <input type="text" class="form-control mr-2" value="91.5%">
                 <button class="btn btn-outline-secondary btn-sm"><i class="fa fa-pencil"></i></button>
                </div>
            
                </td>
                <td>100%</td>
            </tr>
            <!-- ... other rows ... -->
            <tr>
                <td>Doxa Asibey</td>
                <td>100%</td>
                <td>100%</td>
                <td>89.59%</td>
                <td>98.65%</td>
            </tr>
            <tr>
                <td>Doxa Asibey</td>
                <td>100%</td>
                <td>100%</td>
                <td>89.59%</td>
                <td>98.65%</td>
            </tr>
            <tr>
                <td>Doxa Asibey</td>
                <td>100%</td>
                <td>100%</td>
                <td>89.59%</td>
                <td>98.65%</td>
            </tr>
            <tr>
                <td>Doxa Asibey</td>
                <td>100%</td>
                <td>100%</td>
                <td>89.59%</td>
                <td>98.65%</td>
            </tr>
            <tr>
                <td>Doxa Asibey</td>
                <td>100%</td>
                <td>100%</td>
                <td>89.59%</td>
                <td>98.65%</td>
            </tr>
            <tr>
                <td>Doxa Asibey</td>
                <td>100%</td>
                <td>100%</td>
                <td>89.59%</td>
                <td>98.65%</td>
            </tr>
            <tr>
                <td>Doxa Asibey</td>
                <td>100%</td>
                <td>100%</td>
                <td>89.59%</td>
                <td>98.65%</td>
            </tr>
            <tr>
                <td>Doxa Asibey</td>
                <td>100%</td>
                <td>100%</td>
                <td>89.59%</td>
                <td>98.65%</td>
            </tr>
        </tbody>
    </table>
</div>
</div>

    `;
}
export default index;