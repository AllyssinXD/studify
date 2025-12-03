function redirect(url) {
  window.location.pathname = url;
}

function back() {
  history.back();
}

function login(){
  const email = document.getElementsByTagName("input")[0].value;
  const password = document.getElementsByTagName("input")[1].value;

  if(email != "allyssinxd@gmail.com" || password != "banana123") {
    alert("Credencias erradas")
    return
  }

  redirect("home.html")
}

document.addEventListener("DOMContentLoaded", ()=>{
  let footers = document.getElementsByTagName("footer")
  console.log(footers)
  let links = footers[footers.length-1].querySelectorAll("li")

  links.forEach((link, i)=>{
    link.addEventListener("click", ()=>{
      let red = "";
      if(i == 0) red= "home.html"
      if(i == 1) red = "home.html"
      if(i == 2) red = "profile.html"
      redirect(red)
    })
  })
})