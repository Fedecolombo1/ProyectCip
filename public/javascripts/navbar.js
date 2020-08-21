window.addEventListener("load", function(){
    var navbar = document.querySelector("div.navbar")
    navbar.addEventListener("click", function(){
        var navbar = document.querySelector("div.navbar")
        if (navbar.style.display === "block") {
            navbar.style.display = "none";
          } else {
            navbar.style.display = "block";
          }
    })
})