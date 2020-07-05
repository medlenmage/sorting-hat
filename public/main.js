let domString = '';


const housees = [
  {
    house: 'gryffindor',
  },
  {
    house: 'hufflepuff',
  },
  {
    house: 'ravenclaw',
  },
  {
    house: 'slytherin'
  }
]

const student = [];

const army = [];

const armyCards = [];

const studentCards = [];

const addStudent = () => {
  const boxvalue = {
    name: document.getElementById('submitStudent').value,
    house: randomHouse(),
  }
  student.push(boxvalue);
  console.log(student);
  sortStudent(student);
  return false;
}

const randomHouse = () => {
  return housees[Math.floor(Math.random() * 4)].house
}




const printToDom = (selector, textToPrint) => {
  const selectedDiv = document.querySelector(selector);
  selectedDiv.innerHTML = textToPrint;
}




const sortStudent = (student) => {
  domString = '';
  cardString = '';

  for (let i = 0; i < student.length; i++) {
    cardString = `
    <div class="card" style="width: 18rem;" id="${[i]}">
      <img class="card-img-top" src="..." alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${student[i].name}</h5>
        <p class="card-text">Welcome to ${student[i].house}</p>`
    cardString += `<a href="#" class="btn btn-primary" id="bye-bye${[i]}" onclick="`${expelStudent(([i])}`>Expel</a>
      </div>
    </div>
    `
    domString += cardString,
    studentCards.push(cardString)
  }
  // studentCards.push(cardString)
  printToDom('#sortedStudent', domString)
}


const sortStudentEvent = (e) => {
  const buttonId = e.target.id;

  if (buttonId === 'sortMe') {
    sortStudent(student)
    return;
  }
}




function hatFunction() {
  const hatForm = document.getElementById("myHat");
  if (hatForm.style.visibility === "visible") {
    hatForm.style.visibility = "hidden";
  } else {
    hatForm.style.visibility = "visible";
  }
}


const expelStudent = (getOutHere) => {
  army.push(student[getOutHere])
  student.splice(getOutHere)
  armyCards.push(studentCards[getOutHere])
  studentCards.splice(getOutHere)
  console.log(army)
  army[army.length -1].house = "Voldemort's Army"
  domString = domString.replace(armyCards[armyCards.length -1], '')
  // domString += armyCards[armyCards.length -1]
  printToDom('#sortedStudent', domString)
  sortStudent(student);
}





const clickEvents = () => {
  document.querySelector('#sortMe').addEventListener('click', addStudent);
}









const init = () => {
  clickEvents();
  sortStudent(student);

}

init();
