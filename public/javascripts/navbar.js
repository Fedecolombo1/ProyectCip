window.addEventListener("load", function(){
    var navbar = document.querySelector("div.col-2.mobile.navm")
    navbar.addEventListener("click", function(){
        document.querySelector("div.navbar.mobile").classList.toggle("navbar2")
    })
    footer.addEventListener("click", function(){
        document.querySelector("div.navbar.mobile").style.left = "-100%"
    })
})
