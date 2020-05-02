


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

const addStudent = () => {
  const boxvalue = {
    name: document.getElementById('submitStudent').value,
    house: randomHouse()
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

  for (let i = 0; i < student.length; i++) {
    domString += `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${student[i].name}</h5>
          <p class="card-text">Welcome to ${student[i].house}!</p>
          <a href="#" class="card-link">expel</a>
        </div>
      </div>
    `
  }
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


const clickEvents = () => {
  document.querySelector('#sortMe').addEventListener('click', addStudent);
}


const init = () => {
  clickEvents();
  sortStudent(student);

}

init();
