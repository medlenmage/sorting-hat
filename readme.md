# Sorting hat

## Description
This is a page designed to utilize javascript to hide a form that appears after a button is pushed. The form is designed to accept the data entered and push it into an empty area to push through a loop that prints a basic card to the dom detailing their name and the house they have been selected to.
---

### Features
* A intial banner that has small bits of info with a button that makes the form appear
* form take inputed data pushing the information into an array
* a function that takes the data that was pushed into the array and builds a card and prints it to the dom
* a button on each new card printed that expels the student and removes the card from the page.

---

### How to run
1. clone down the repo
2. using hs command in console load server and choose from the two
3. in browser go to local host where it is being held

---

## Contributors
* [Joshua Medlen](https://github.com/medlenmage)

## To-Do
- [ ] Build a banner statement with a button that controls the visibilty of the form
- [ ] build a form and style it in a way that it hides and appears from the click of the button on the banner
- [ ] build a function that accepts the data from the input on the form
- [ ] build a loop function that builds a card from the new pushed data in the array and prints a card to the dom with an expel button
- [ ] have the expel button work in a way which it removes the student from the array and then removes the card from the page/dom
---

## Code Example

```
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
```
