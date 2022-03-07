const accordion = document.getElementsByClassName('NC-Collapse');
let NCContent = document.getElementsByClassName('NC-Content')

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}

if ("NC-Collapse active") {
    NCContent.style.height = "100px"
}