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

// const check =document.querySelector('.hall');
// check.addEventListener('click',(e) =>
// {
//   if ((e.target.classList.contains('cabinR1') || e.target.classList.contains('cabinR2') ))
//   {
//     e.target.classList.toggle('selected');
//   }
// });


// function selectCabin(cabinNumber, cabinType) {
//   localStorage.setItem('selectedCabin', cabinNumber);
//   localStorage.setItem('cabinType', cabinType);
//   window.location.href = 'payment.html'; // your payment page
// }
let selectedCabin = null;
let selectedType = null;

// Select all cabins except occupied
document.querySelectorAll('.cabinR1:not(.occupied), .cabinR2:not(.occupied)').forEach(cabin => {
  cabin.addEventListener('click', () => {
    // Remove previous selection
    if (selectedCabin) {
      selectedCabin.classList.remove('selected');
    }

    // Mark current as selected
    cabin.classList.add('selected');
    selectedCabin = cabin;

    // Get type from prefix (A = AC, N = Non-AC)
    const cabinNumber = cabin.textContent.trim();
    selectedType = cabinNumber.startsWith('A') ? 'AC' : 'Non-AC';

    // Save to localStorage
    localStorage.setItem('selectedCabin', cabinNumber);
    localStorage.setItem('cabinType', selectedType);

    // Show the proceed button
    document.getElementById('proceedBtn').classList.remove('d-none');
  });
});

// Redirect to payment page
document.getElementById('proceedBtn').addEventListener('click', () => {
  if (selectedCabin && selectedType) {
    window.location.href = 'payment.html';
  }
});




  



