function AccountNavigation(active) {
    const links = [
      { label: "Notification", href: "/Kanbas/Courses/Home/screen.html" },
      { label: "Profile", href: "/Kanbas/Courses/Modules/screen.html" },
      { label: "Files", href: "/Kanbas/Courses/Assignments/screen.html" },
      { label: "Settings", href: "/Kanbas/Courses/Grades/screen.html" },
      { label: "eProfiles", href: "/Kanbas/Courses/Settings/screen.html" },
      { label: "Shared Content", href: "#" },
      { label: "The Hub", href: "#" },
      { label: "Quickly Course Tool", href: "#" },
      { label: "Global Announcement", href: "#" },
      { label: "Files", href: "#" },
      { label: "Pages", href: "#" },
    ];
    
  return `<ul class ="wd-course-navigation">
  
  ${links.map(link => `<li class="${link.label === active ? "wd-active" : ""}"><a href="${link.href}">${link.label}</a></li>`).join('')}
  
  
                   
  </ul> ` ;   }
  export default AccountNavigation;        