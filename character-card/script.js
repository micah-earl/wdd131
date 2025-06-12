const character = {
  name: "Snortleblat",
  class: "Swamp Beat Diplomat",
  level: 5,
  health: 100,
  image: 'https://andejuli.github.io/img/snortleblat.png',
  attacked() {
    if (this.health >= 20) {
      this.level -= 1;
      this.health -= 20;
    } else {
      alert('Character Died');
    }
  },
  levelUp() {
    this.level += 1;
    this.health += 20;
  }
};

// Select DOM elements
const img = document.body.querySelector(".image")
const Name = document.body.querySelector(".name")
const lass = document.body.querySelector("#class") 
const Level = document.body.querySelector('#level')
const Health = document.body.querySelector('#health')
const attackedBtn = document.body.querySelector('#attacked')
const levelUpBtn = document.body.querySelector('#levelup')

// Function to update DOM
function updateDOM() {
  img.src = character.image
  Name.innerHTML = character.name
  lass.innerHTML = character.class
  Level.innerHTML = character.level
  Health.innerHTML = character.health
}

// Attach event listeners
attackedBtn.addEventListener('click', () => {
  character.attacked();
  updateDOM();
});

levelUpBtn.addEventListener('click', () => {
  character.levelUp();
  updateDOM();
});

// Initial DOM update on page load
updateDOM();
