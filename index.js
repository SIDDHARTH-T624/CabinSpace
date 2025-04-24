function comingSoon (){
    alert("this feature is not yet availble,stay tuned!");
}

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    // If already active, do nothing
    if (this.classList.contains('active')) return;

    this.classList.remove('animate');

    setTimeout(() => {
      this.classList.remove('animate');
    }, 500);
  });
});




  



