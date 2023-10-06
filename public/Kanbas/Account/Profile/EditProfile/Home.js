import KanbasNavigation from "/Kanbas/KanbasNavigation/KanbasNavigation.js";
import AccountNavigation from "/Kanbas/Account/Profile/AccountNavigation.js";


function Home(){
    return  `
   
        <div class = "wd-flex-row-container  ">
            <div class ="wd-kanbas-navaigation  d-none d-md-block">
              ${KanbasNavigation("Account")} 
              </div>

    <div >
               ${AccountNavigation("Profile")}
    </div>
    <div>

    <div class="container mt-5">
    <!-- User Icon and Cancel Editing Button -->
    <div class="d-flex justify-content-between align-items-start">
        <i class="fa fa-user fa-5x"></i>
       
    </div>

    <!-- Form Section -->
    <form class="mt-4">
        <!-- Name Input -->
        <div class="mb-3">
            <label for="nameInput" class="form-label">Name:*</label>
            <input type="text" class="form-control" id="nameInput" value="Jose Annunziato">
        </div>

        <!-- Pronouns Dropdown -->
        <div class="mb-3">
            <label for="pronounsSelect" class="form-label">Pronouns:</label>
            <select class="form-control" id="pronounsSelect">
                <option selected>None</option>
                <!-- Add more pronoun options here -->
            </select>
        </div>

        <!-- Title Input -->
        <div class="mb-3">
            <label for="titleInput" class="form-label">Title:</label>
            <input type="text" class="form-control" id="titleInput" placeholder="Title Here">
        </div>

        <!-- Contact Section -->
        <div class="mb-4">
            <h4>Contact</h4>
            <p>No registered services, you can add some on the <a href="#">settings page</a>.</p>
        </div>

        <!-- Biography Section -->
        <h4>Biography</h4>
        <textarea class="form-control mb-4" rows="4">Faculty, Software Engineer, AI, Space, and renewables enthusiast.</textarea>

        <!-- Links Section -->
        <h4>Links</h4>
        <div class="row mb-3">
            <div class="col-6">
                <label for="linkTitle" class="form-label">Title</label>
                <input type="text" class="form-control" id="linkTitle" value="YouTube">
            </div>
            <div class="col-6">
                <label for="linkURL" class="form-label">URL</label>
                <input type="url" class="form-control" id="linkURL" value="https://www.youtube.com">
            </div>
        </div>

        <!-- More links can be added in a similar structure -->

        <!-- Buttons -->
        <div class="d-flex justify-content-between mt-4">
      
        <button type="button" class="btn btn-outline-secondary" onclick="window.location.href='/Kanbas/Account/Profile/screen.html'">
        <i class="fa fa-pencil"></i> Cancel Editing
    </button>
    <button type="button" class="btn btn-danger text-white" onclick="window.location.href='/Kanbas/Account/Profile/screen.html'">
    Save Profile
 </button>
               

    
           
        </div>
    </form>
</div>

    </div>
    
<div>
<a href="/Kanbas/Account/Profile/screen.html">
<button class="btn btn-outline-secondary float-end">
<i class="fa fa-pencil"></i> Cancel Editing
</button>
</a>
</div>
   
    
</div>
`;
}
export default Home;