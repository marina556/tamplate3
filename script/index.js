var 
    navItems    =   document.querySelectorAll(".nav-item "),
    navItem1    =   document.getElementById(".active-li #nav-link1"),
    navItem2    =   document.getElementById(".active-li #nav-link2"),
    navItem3    =   document.getElementById(".active-li #nav-link3"),
    navItem4    =   document.getElementById(".active-li #nav-link4"),
    navItem5    =   document.getElementById(".active-li #nav-link5"),
    i;
// ******************************************* navbar start ******************************************* //

    function topScroll(){
        var top = document.documentElement.scrollTop;
         if(top >= 0 && top <= 500){
            for (i = 0; i < navItems.length; i++) {
                    for (i = 0; i < navItems.length; i++) 
                    {
                        navItems[i].classList.remove("active-li");
                    }
                    navItems[0].classList.add("active-li");
            }
        }
        else if(top > 1300 && top <= 1700){
            for (i = 0; i < navItems.length; i++) {
                for (i = 0; i < navItems.length; i++) 
                {
                    navItems[i].classList.remove("active-li");
                }
                navItems[2].classList.add("active-li");
        }
        }
        else if(top > 500 && top <= 1300){
            for (i = 0; i < navItems.length; i++) {
                for (i = 0; i < navItems.length; i++) 
                {
                    navItems[i].classList.remove("active-li");
                }
                navItems[1].classList.add("active-li");
        }
        }
        else if(top > 1500 && top <= 2150){
            for (i = 0; i < navItems.length; i++) {
                for (i = 0; i < navItems.length; i++) 
                {
                    navItems[i].classList.remove("active-li");
                }
                navItems[3].classList.add("active-li");
        }
        }
        else if(top > 2150 && top <= 2400){
            for (i = 0; i < navItems.length; i++) {
                for (i = 0; i < navItems.length; i++) 
                {
                    navItems[i].classList.remove("active-li");
                }
                navItems[4].classList.add("active-li");
        }
        }     
        setTimeout("topScroll()",.1);
    }
    
    topScroll();


for (i = 0; i < navItems.length; i++) {
	navItems[i].onclick = function() {
        for (i = 0; i < navItems.length; i++) 
        {
			navItems[i].classList.remove("active-li");
        }
		this.classList.add("active-li");
	}
}

// ******************************************* navbar end ******************************************* //

var show    =   document.getElementsByClassName("fa-eye"),
    layout  =   document.getElementById("layout"),
    layImg  =   document.getElementById("layout-img"),
    layInfo =   document.getElementById("layout-info"),
    layEsc  =   document.querySelector("#layout span"),
    x;

    for (x = 0 ; x < show.length ; x++){
        show[x].onclick=function(){
                layout.style.display="block";
                layInfo.textContent=this.nextElementSibling.getAttribute('alt');
                layImg.src=this.nextElementSibling.getAttribute('src');              
        }
    }
    layEsc.onclick=function(){
        layout.style.display='none';
    }
