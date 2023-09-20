const header = document.createElement("div");
header.id = "header-container";
header.style.width = "100%";
header.style.textAlign = "center";
header.style.backgroundColor = "#252B42";
header.style.display = "flex";
header.style.flexDirection = "column";

const littleHeading = document.createElement("h2");
littleHeading.id = "welcome-heading";
littleHeading.textContent = "Welcome";
littleHeading.style.color = "#23A6F0";
littleHeading.style.paddingTop = "100px";
littleHeading.style.fontSize = "16px";
littleHeading.style.fontFamily = " Montserrat, sans-serif"

const heading = document.createElement("h1");
heading.id = "page-heading";
heading.textContent = "Selling on the internet like a pro"; 
heading.style.color = "white";
// heading.style.width = "336px"
heading.style.display = "flex";
heading.style.justifyContent = "center"
heading.style.padding = "20px 50px 50px 20px";
heading.style.fontSize = "36px";
heading.style.fontFamily = " Montserrat, sans-serif"

const paragraph = document.createElement("p");
paragraph.innerHTML = `We know how large objects will act, but things on a 
small scale just do not act that way.`;
paragraph.style.color = ("white");
paragraph.style.fontFamily = " Montserrat, sans-serif"

const buttonsDiv = document.createElement("div");
buttonsDiv.innerHTML = `
<button class="firstButton">Get Quote Now</button>
<button class="secondButton">Learn more</button>
`
buttonsDiv.style.backgroundColor = "#252B42";
buttonsDiv.style.display = "flex"
buttonsDiv.style.justifyContent = "center"

const buttonsDivFirstButton = buttonsDiv.querySelector(".firstButton")
buttonsDivFirstButton.style.backgroundColor = "#23A6F0";
buttonsDivFirstButton.style.color = "white";
buttonsDivFirstButton.style.padding = "15px";
buttonsDivFirstButton.style.border = "none";
buttonsDivFirstButton.style.marginRight = "10px";
buttonsDivFirstButton.style.minWidth = "193px";
buttonsDivFirstButton.style.borderRadius = "5px";
buttonsDivFirstButton.style.fontFamily = " Montserrat, sans-serif"

const buttonsDivSecondButton = buttonsDiv.querySelector(".secondButton")
buttonsDivSecondButton.style.backgroundColor = "#252B42";
buttonsDivSecondButton.style.color = "white";
buttonsDivSecondButton.style.padding = "15px";
buttonsDivSecondButton.style.borderColor = "#23A6F0";
buttonsDivSecondButton.style.marginRight = "10px";
buttonsDivSecondButton.style.minWidth = "193px";
buttonsDivSecondButton.style.borderRadius = "5px";
buttonsDivSecondButton.style.fontFamily = " Montserrat, sans-serif"

const infoBoxesDiv = document.createElement("div");
infoBoxesDiv.style.display = "flex";
infoBoxesDiv.style.justifyContent = "center";
infoBoxesDiv.style.marginTop = "60px";
infoBoxesDiv.style.backgroundColor = "#252B42";
infoBoxesDiv.style.gap = "20px";

const trainingCourseBox = document.createElement("div");
// trainingCourseBox.style.height = "292px";
trainingCourseBox.style.width = "328px";
trainingCourseBox.style.backgroundColor = "black";

document.body.appendChild(trainingCourseBox)

const onlineCourseBox = document.createElement("div");
// onlineCourseBox.style.height = "292px";
onlineCourseBox.style.width = "328px";
onlineCourseBox.style.backgroundColor = "black"

document.body.appendChild(onlineCourseBox)


document.body.appendChild(header); 
header.appendChild(littleHeading);
header.appendChild(heading);
header.appendChild(paragraph);

document.body.appendChild(buttonsDiv);
document.body.appendChild(infoBoxesDiv)



