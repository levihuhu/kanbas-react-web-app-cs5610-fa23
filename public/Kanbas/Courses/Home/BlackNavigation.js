function BlackNavigation(){

return `<nav class="navbar navbar-expand-lg navbar-dark "style="color:white; background-color:black">
<!-- Hamburger Icon for Kanbas Navigation from FontAwesome -->
<a href = "./Canvasnav.html">
<i class="fa fa-bars fa-lg mr-3" aria-hidden="true" style="cursor:pointer;"></i>
</a>

<!-- Adjusted the structure and style of your elements to match the layout -->
<div class="d-flex flex-column align-items-start justify-content-center">
    <a class="navbar-brand mb-0 h1" href="#" style="font-size: 15px;">CS4550.12631.202410</a>
    <span style="font-size: 14px;">Modules</span>
</div>

<!-- This is the space filler for flexbox layout to push the chevron icon to the right -->
<div class="ml-auto"></div>

<!-- Chevron Icon for Course Navigation from FontAwesome -->
<a href="./Coursenav.html">
<i class="fa fa-chevron-down fa-lg ml-3" aria-hidden="true" style="cursor:pointer;"></i>
</a>
</nav>

`;


}
export default BlackNavigation;

