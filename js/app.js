/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
const messi={
    fullName:"Lionel Andrés Messi",
    dateOfBirth:"24-6-1987",
    nationality:"Argentine",
    positions:["Forward","Left Winger","Striker"],
    ballonDOrs:6,
    europeanGoldenShoes:6,
    totalIndividualTrophies:12,
    totalClubTrophies:33,
    youthClubs:["Newell's Old Boys","FC Barcelona"],
    youthClubsDurations:["1994-2000","2000"],
    numberOfGoals:[705,635,71],
    numberOfAssists: [378, 326,52],
    clubTrophies:["4x Champions League", "3x FIFA Club World Cup","10x La Liga","6x Spanish Cup","8X Spanish Super Cup","3x UEFA Supercup"],
    nationalTeamTrophies:["1x Under-20 World Cup","1x Olympic Medal"],
    topScorer:20
}//These are global data needed through out the entire JS file


/**
 * End Global Variables
 * Start Helper Functions
 *
*/
function addTextToSection(text,sectionNumber){
    const sections = document.querySelectorAll('.landing__container');//Selecting sections with the class landing_container
    p = document.createElement('p');
    p.innerText=text;
    p.setAttribute('id','p'+sectionNumber)
    sections[sectionNumber].appendChild(p);//adding the paragraph element to the intended section
}// Function is used to add texts to the desired sections of a class "landing container"


function entermouse(e){
    console.log("hey");
    e.target.setAttribute('style',"color:#162B4E;background-color:white");
}

function button(){
    footer = document.querySelector('.page__footer');//Selecting the footer
    b=document.createElement('button');//Creating a button
    b.innerText="Top";
    b.setAttribute('style', "display:block;width:100px;height:50px;background-color:#000;color:white"); //background - color: white; color: white; alignment: left
    //Adding an event listener
    b.addEventListener('click',function(){
    document.querySelector('#top').scrollIntoView({block:"start",behavior:"smooth"});
    });
    footer.setAttribute('style',"display:flex;justify-content: space-between");
    //Adding the button to the footer
    footer.appendChild(b);
}
/**
 * End Helper Functions
 * Begin Main Functions
 *
*/
function textSection1() {
    const t = `The full name is ${messi.fullName} an ${messi.nationality} ${messi.positions} soccer player. He was born in ${messi.dateOfBirth} as the third child of 4. His father Jorge Messi was a steel factory manager and his mother was working in a magnet manufacturing workshop.
    His career started with ${messi.youthClubs[0]} in the duration ${messi.youthClubsDurations[0]} then moved to ${messi.youthClubs[0]} starting from ${messi.youthClubsDurations[1]}.
    If we dug up a little further through Lionel's personality, we will find that is calm and concentrating in the field. Not only just in the field, but also outside of the football field, which means he cares so much about the style of management of the club he plays for.
    Until this very moment, ${messi.fullName} still plays for ${messi.youthClubs[1]}. However, his future with the club is a mystery in the moment due to the instabilty of the club's management.`;
    //Text to be added to section 1
      addTextToSection(t,0);  
}//This function is used to add the data of the first section about the player from the js file to the html file.

function textSection2() {
    const t = `Lionel Messi started to be a ${messi.youthClubs[1]} since ${messi.youthClubsDurations[1]} and the rest is just history.
    He won a total of ${messi.totalClubTrophies} trophies with FC ${messi.youthClubs[1]}, which is asstonishing. He won ${messi.clubTrophies}.
    In addition, Lionel has managed to grab to trophies with the national team, which are ${messi.nationalTeamTrophies[0]} and ${messi.nationalTeamTrophies[1]}
    Through out his outstanding career with FC ${messi.youthClubs[1]} and the Argentine National Team, he had scored a handful of goals and made a lot of assists for his team mates.`;
    //Text to be added to section 2
    addTextToSection(t, 1);
}//This function is used to add the data of the second section about the player from the js file to the html file.

function textSection3() {
    const t = `The glory of what he has done does not stop there. On the individual side of his career, he had won many trophies and awards. He has won ${messi.totalIndividualTrophies}, ${messi.ballonDOrs} Ballon D'Ors -until now- in addition to ${messi.europeanGoldenShoes} European Golden Shoes.
    These awards and trophies were not out of sheer luck. It was the result of the great performance in the field.
    The numbers backing up the fact that he is one of a kind is that he scored total of ${messi.numberOfGoals[0]}, ${messi.numberOfGoals[1]} with ${messi.youthClubs[1]} and ${messi.numberOfGoals[2]} with the ${messi.nationality} National Team.
    Not also is he a talented striker, but also could be put in the category of great playermakers since he has the total of ${messi.numberOfAssists[0]} assists in his career till now. He has ${messi.numberOfAssists[1]} with ${messi.youthClubs[1]} and ${messi.numberOfAssists[2]} with the ${messi.nationality} National Team.`;
    //Text to be added to section 3
    addTextToSection(t, 2);
}//This function is used to add the data of the third section about the player from the js file to the html file.

// build the nav
function buildNav(){
    //Creating elements of the navbar list
    const navbarli = document.querySelector('.navbar__menu');
    const li1=document.createElement('li');
    const li2=document.createElement('li');
    const li3=document.createElement('li');
    const ul=document.createElement('ul');
    //Adding classes to the list items in the navbar
    ul.classList.add('navbar__menu');
    li1.classList.add('menu__link');
    li2.classList.add('menu__link');
    li3.classList.add('menu__link');
    //Adding Ids to the list items in the navbar
    li1.setAttribute('id','LiItemSection1');
    li2.setAttribute('id', 'LiItemSection2');
    li3.setAttribute('id', 'LiItemSection3');
    //Adding text contents to the items
    li1.textContent=document.querySelectorAll('h2')[0].textContent;//Adding the text content of the heading of the page
    li2.textContent=document.querySelectorAll('h2')[1].textContent;//Adding the text content of the heading of the page
    li3.textContent=document.querySelectorAll('h2')[2].textContent;//Adding the text content of the heading of the page
    //Adding the list items to the unordered list and then adding the list to the nav bar
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    //Adding the list to the nav bar
    navbarli.appendChild(ul);
}

// Add class 'active' to section when near top of viewport
function highlightactive(e) {
    e.preventDefault();//Prevent the default behavior
    //Checking which section we are in and making its list item with a different color
    if (document.querySelector('#anchor1').getBoundingClientRect().y + 100 > 0) {
        document.querySelector('#LiItemSection1').setAttribute("style", "background: white;color:#162B4E");
        document.querySelector('#LiItemSection2').setAttribute('style', "background-color:#162B4E;color:white");
        document.querySelector('#LiItemSection3').setAttribute('style', "background-color:#162B4E;color:white");

    } else if (document.querySelector('#anchor2').getBoundingClientRect().y > 0) {
        document.querySelector('#LiItemSection2').setAttribute("style", "background: white;color:#162B4E");
        document.querySelector('#LiItemSection1').setAttribute('style', "background-color:#162B4E;color:white");
        document.querySelector('#LiItemSection3').setAttribute('style', "background-color:#162B4E;color:white");
    } else if (document.querySelector('#anchor3').getBoundingClientRect().y > 0) {
        document.querySelector('#LiItemSection3').setAttribute("style", "background: white;color:#162B4E");
        document.querySelector('#LiItemSection2').setAttribute('style', "background-color:#162B4E;color:white");
        document.querySelector('#LiItemSection1').setAttribute('style', "background-color:#162B4E;color:white");
    }
    document.querySelector('#LiItemSection1').addEventListener('hover', entermouse);
    document.querySelector('#LiItemSection2').addEventListener('hover', entermouse);
    document.querySelector('#LiItemSection3').addEventListener('hover', entermouse);
}


// Scroll to anchor ID using scrollTO event
function anchorgo(e){
    e.preventDefault();
    if (e.target.textContent ==="Lionel Messi"){
        document.querySelector('#anchor1').scrollIntoView({ behavior: "smooth"});
    } else if (e.target.textContent === "Club and National Team\'s History") {
        document.querySelector('#anchor2').scrollIntoView({ block: "start", behavior :"smooth"});
    } else if (e.target.textContent === "Personal Glory") {
        document.querySelector('#anchor3').scrollIntoView({ block: "start", behavior: "smooth"});
    }
}//This function is used as an routine after an event is fired for the items in the navbar
//to go to the desired section


/**
 * End Main Functions
 * Begin Events
 *
*/
//The three text sections are added to the page
textSection1();
textSection2();
textSection3();
button();
// Build menu
buildNav();
// Scroll to section on link click
document.querySelector('#LiItemSection1').addEventListener('click', anchorgo);
document.querySelector('#LiItemSection2').addEventListener('click', anchorgo);
document.querySelector('#LiItemSection3').addEventListener('click', anchorgo);
// Set sections as active
window.addEventListener("scroll", highlightactive, false);

