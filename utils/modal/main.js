// Get modal element
const modal = document.getElementById("simpleModal");

// Get open modal button
const modalBtn = document.getElementById("modalBtn");

// Get close modal button
const closeBtn = document.querySelector(".closeBtn");

// Listen for open click
modalBtn.addEventListener("click", openModal);

// Listen for close click
closeBtn.addEventListener("click", closeModal);

// Listen for outside click
window.addEventListener("click", clickOutside);

// Function to open modal
function openModal() {
  modal.style.display = "block";
}

// Function to open modal
function closeModal() {
  modal.style.display = "none";
}

// Function to click outside
function clickOutside(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}
