function CourseNavigation(active) {
  const links = [
    { label: "Home", href: "/Kanbas/Courses/Home/screen.html" },
    { label: "Modules", href: "/Kanbas/Courses/Modules/screen.html" },
    { label: "Assignments", href: "/Kanbas/Courses/Assignments/screen.html" },
    { label: "Grades", href: "/Kanbas/Courses/Grades/screen.html" },
    { label: "Settings", href: "/Kanbas/Courses/Settings/screen.html" },
    { label: "Zoom", href: "#" },
    { label: "Piazza", href: "#" },
    { label: "People", href: "#" },
    { label: "Rubrics", href: "#" },
    { label: "Files", href: "#" },
    { label: "Pages", href: "#" },
  ];
  
return `<ul class ="wd-course-navigation">

${links.map(link => `<li class="${link.label === active ? "wd-active" : ""}"><a href="${link.href}">${link.label}</a></li>`).join('')}


                 
</ul> ` ;   }
export default CourseNavigation;            
        
