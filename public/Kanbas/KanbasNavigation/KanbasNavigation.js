function KanbasNavigation(active){
const links = [
    { label: "Account", href: "/Kanbas/Account/Profile/screen.html",icon:"fa fa-user" },
    { label: "DashBoard", href: "/Kanbas/DashBoard/screen.html", icon :"fa fa-tachometer"},
    { label: "Courses", href: "/Kanbas/Courses/Home/screen.html",icon:"fa fa-book" },
    { label: "Calendar", href: "#" ,icon:"fa fa-calendar-check-o"},
    { label: "Inbox", href: "#" ,icon:"fa fa-inbox"},
    { label: "History", href: "#",icon:"fa fa-history" },
    { label: "Studio", href: "#",icon:"fa fa-video-camera" },
    { label: "Commons", href: "#",icon:"fa fa-commenting" },
    { label: "help", href: "#" ,icon:"fa fa-question-circle"},
];



return  (`<ul class="wd-kanbas-navaigation">
${links.map(link =>
    `<li class="${link.label === active ? "wd-active" : ""}">
       <a href="${link.href}">
          <div class="icon-wrap"><i class="${link.icon}"></i></div>
          <div class="text-wrap">${link.label}</div>
       </a>
     </li>`).join('')}
</ul>`)

}
export default KanbasNavigation;