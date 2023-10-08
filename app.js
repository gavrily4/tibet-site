// Select options

// Script to open select options
document.querySelectorAll(".hero__select").forEach((option) => {
    option.addEventListener("click", function () {
        this.querySelector(".hero__select-options").classList.toggle("open");
        this.classList.toggle('open-select');
        console.log('close fist');
    });
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (event) => {
    const ids = ['locations', 'participants'];
    for (let id of ids) {
        const heroSelect = document.getElementById(id);
        const selectOptions = heroSelect.querySelector(".hero__select-options");

        let heroSelectElements = Array.from(heroSelect.childNodes);
        heroSelectElements.push(heroSelect);
        heroSelectElements = heroSelectElements.concat(Array.from(heroSelect.querySelectorAll('.hero__select-option')));
        if (!isEventInNodes(event.target, heroSelectElements) && event.target !== heroSelect) {
            selectOptions.classList.remove("open");
            heroSelect.classList.remove('open-select');
            
        }
    }
});

function isEventInNodes(checkedElement, elements) {
    for ( let element of elements ) {
        if (checkedElement === element) return true;
    }
    return false;
}


// JavaScript to set the selected option
document.querySelectorAll(".hero__select-option").forEach((option) => {
    option.addEventListener("click", function () {
        const customSelect = this.closest(".hero__select");
        customSelect.querySelector(".hero__select-selected").innerText = this.innerText;
        const oldChosen = document.querySelector('.chosen');
        if (oldChosen) oldChosen.classList.remove('chosen');
        this.classList.toggle('chosen');
    });
});


// Loop icon
document.querySelectorAll('.gallery__picture').forEach((pictureContainer) => {
    pictureContainer.addEventListener("mouseover", function() {
        // console.log('Heeeey');
        // console.log(pictureContainer);
        const loopIcon = pictureContainer.querySelector('.gallery__icon');
        
        loopIcon.classList.add('open');
        console.log(loopIcon);
    });
    pictureContainer.addEventListener("mouseout", function() {
        const loopIcon = pictureContainer.querySelector('.gallery__icon');
        loopIcon.classList.remove('open');
    });
});

// Gallery modal
const galleryModal = document.getElementById('galleryModal');
const modalContent = document.getElementById('modalContent');
const closeModal = document.getElementById('closeModal');
const galleryPictures = document.querySelectorAll('.gallery__picture');

// Open modal when an image is clicked
galleryPictures.forEach((pic) => {
  pic.addEventListener('click', (event) => {
    event.preventDefault();
    modalContent.src = pic.querySelector('.gallery__link').href;
    galleryModal.style.display = 'block';
  });
});

// Close modal when the close button is clicked
closeModal.addEventListener('click', () => {
  galleryModal.style.display = 'none';
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (event) => {
  if (event.target === galleryModal) {
    galleryModal.style.display = 'none';
  }
});