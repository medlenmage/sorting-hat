const student = []


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

const addStudent = () => {
  boxvalue = document.getElementById('studentName').Value;
  student.push(boxvalue)
  console.log(student)
  document.getElementById('#submitStudent').addEventListener("click", addstudent)
  return false
}



// const clickEvents = () => {
//   document.getElementById('#submitStudent').addEventListener("click", addstudent)
// }






function hatFunction() {
  var hatForm = document.getElementById("myHat");
  if (hatForm.style.visibility === "visible") {
    hatForm.style.visibility = "hidden";
  } else {
    hatForm.style.visibility = "visible";
  }
}


const init = () => {
  clickEvents()
}
