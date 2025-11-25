const userName = document.querySelector('.user-name');
const userEmail = document.querySelector('.user-email');
const firstLetter = document.querySelector('.first-letter');
const hideArrow = document.querySelector('.hidebtn');
const showArrow = document.querySelector('.showbtn');
const tagContent = document.querySelectorAll('.tab-content');
const currentTab = document.querySelectorAll('.current-tab');
const sidenavContainer = document.querySelector('.sidenav-container');
const brand = document.querySelector('.sidenav-brand_all')
const brandContainer = document.querySelector('.sidenav-brand');
const logoutBotton = document.querySelectorAll('.logout');
const allSidebarContainer = document.querySelector('.sidenav-container-tabs');
const dashboardExpand = document.querySelector(".dashoard-container");


let getinfo = JSON.parse(localStorage.getItem('userInfo'));

userName.innerHTML = getinfo.Name;
userEmail.innerHTML = getinfo.Email;
firstLetter.innerHTML = getinfo.Name[0];

showArrow.addEventListener('click', () => {
    hideArrow.style.display = "block";
    showArrow.style.display = "none";
    for (let elem of tagContent) {
        elem.style.display = "none"
    }
    sidenavContainer.style.width = "79px";
    dashboardExpand.style.transform = "scale(1.1)";
    dashboardExpand.style.overflow = "hidden";
    dashboardExpand.style.paddingTop = "3rem";
    dashboardExpand.style.marginRight = "7.5rem";

})

hideArrow.addEventListener('click', () => {
    hideArrow.style.display = "none";
    showArrow.style.display = "block";
    for (let elem of tagContent) {
        elem.style.display = "block"
        brand.style.display = "flex";
    }
    sidenavContainer.style.width = "16rem";
    dashboardExpand.style.transform = "scale(1)";
    
 
})


for (let tab of currentTab) {
    tab.addEventListener('click', (e) => {
        e.preventDefault()
        for (let t of currentTab) {
            t.style.backgroundColor = "";
            t.style.color = "";
        }

        tab.style.backgroundColor = "#EEF2FF";
        tab.style.color = "#3650F9";
    })

}

for (e of logoutBotton) {
    e.addEventListener('click', () => {
        window.location.href = "/auth.html";
    })
}