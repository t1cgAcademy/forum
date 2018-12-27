/* POST
date: ,
type: "post",
name: "",
summary: "",
content: "",
replies: [],
*/

/* COMMENT
date: 0,
type: "comment",
name: "",
content: "",
replies: [],
*/

const webDev101 = [
  {
    date: 21,
    type: "post",
    name: "Sean",
    summary: "When will the first assignment be posted?",
    content: "When will the first assignment be posted?",
    replies: [
      {
        date: 22,
        type: "comment",
        name: "Phil",
        content: "Just posted. github.com/fakelink",
        replies: [
          {
            date: 23,
            type: "comment",
            name: "Sean",
            content: "Thanks!",
            replies: [],
          },
          {
            date: 24,
            type: "comment",
            name: "Jon",
            content: "Thank u",
            replies: [],
          }
        ],
      },
    ],
  },
  {
    date: 1,
    type: "post",
    name: "Jon",
    summary: "Do you recommend a mac or a PC ",
    content: "I have access to both and was wondering what I should bring",
    replies: [
      {
        date: 2,
        type: "comment",
        name: "Phil",
        content: "Mac all day",
        replies: [],
      }
    ],
  },
  {
    date: 0,
    type: "post",
    name: "Phil",
    summary: "Welcome to Web Dev 101",
    content: `Web Dev 101 Finalized Curriculum
    Detailed layout of T1CG Web Dev 101 curriculum for instructors to follow.
    TODO: Come up with new Assignments for every class
    Assignments should be ~3 short features to add to the project and should take no longer than an hour.
    TODO: Organize and break up teaching of Vanilla JS slides

    Prerequisites: Environment Setup
    Install Homebrew / Chocolatey (Required)
    Install Node (Required)
    Install IDE (Required, *VSCode highly recommended)
    Install Git (Required)
    Integrate VSCode terminal with Git bash (Recommended)
    VSCode Extensions (Recommended)
    Terminal
    Prettier
    Live server
    HTML Snippets
    Auto Close Tag
    ES7 React snippets
    ESLint
    Bracket Pair Colorizer

    Week 1: Terminal, Git, HTML, CSS
    Part 1: Terminal, HTML, CSS
    First hour: Introduction, overview of class, environment setup, slides, terminal commands, Git introduction
    Second hour: Basic HTML and CSS in codepen.io
    Part 2: More HTML / CSS Practice
    Set everyone up with live-server
    Create celebrity website
    Upload to GitHub
    Assignment: Finish celebrity website and upload to Github
    1. Add 3 new HTML tags that you have not used before
    2. Add 3 new CSS properties that you have not used before
    3. Review basic terminal commands (cd, ls, mkdir, cat). Find 3 new basic commands and write about them.
    Week 2: JavaScript
    Part 1: JavaScript Introduction
    Use slides and codepen to introduce variables, strings, functions, classes, dom manipulation, event handlers
    Part 2: Add JavaScript to Celebrity site
    Button Click with alert
    Change header text
    Show Date
    Change background color
    Add movie to table
    Assignment
    1.
    2.
    3.
    Week 3: JavaScript Continued
    Part 1: More JavaScript concepts
    Use slides and codepen to introduce booleans, conditionals, operators, Arrays, Objects,
    Part 2: Guess The Number Game
    Assignment / Phil’s Byte Sized JS Problems
    1.
    2.
    3.
    Week 4: JavaScript continued
    Part 1: Use slides to introduce loops, switches, es6, built in Objects (Number, Math, Date), built in Array methods
    Part 2: Library App
    Assignment
    1.
    2.
    3.
    Week 5: React
    Part 1: Introduction to React
    Slides
    Introduction to create-react-app
    Basic introduction to JSX, state, props, components, functions.
    Part 2: Convert celebrity site to React
    Same exact functionality as Week 2

    Week 6: React continued
    Part 1: React Rock Paper Scissors
    Rock, paper, scissors game from scratch that incorporates state and props
    Part 2: Calculator App
    Clone skeleton and have students try to fill in functions
    Add power, factorial, modulus functionality
    Assignment: Use JS Math object to add 3 different calculator functions
    1. Add square root functionality
    2. Add e^x functionality
    3. Add Pi button / circumference and radius functionality
    Week 7: Lifecycle Methods & API
    Part 1: Introduction to Lifecycle methods and API
    Slides
    Code along introducing componentDidMount, componentDidUpdate, componentWillUnmount, shouldComponentUpdate
    Hit a basic API such as randomuser.me API
    Part 2: Weather App
    Create weather app basic components and fetch data
    Second half is styling - this could be prebuilt in to reduce time spent on this
    Assignment:
    1. Add 5 day forecast
    2.
    3.
    Week 8: Advanced API & HTTP Methods
    Part 1: HTTP Methods
    Go over slides with HTTP methods, Node.js, MongoDB, and general overview of our application
    How to run it locally
    Go through documentation and routes with Postman
    Part 2: Funky Hotel UI Code Along
    Clone funky-hotel-ui
    Fill in skeleton methods with functionality for GET, POST, DELETE
    Assignment:
    Finish the rest of the funky hotel app
    Upload to GitHub`,
    replies: [],
  },
];

const webDev201 = [
  {
    date: 0,
    type: "post",
    name: "Phil",
    summary: "Welcome to Web Dev 201",
    content: `In this course we will be covering the following topics.
    Week 1:
      Part 1: Webpack
      Part 2: Advanced React review
    Week 2:
      Part 1: Testing
      Part 2: Create small app and test it
    Week 3:
      Part 1: Redux
      Part 2: Redux app
    Week 4:
      Part 1: Node.js & express
      Part 2: Node.js & express app
    Week 5:
      Part 1: Mongo
      Part 2: Mongo app
    Week 6:
      Part 1: DevOps
      Part 2: Deploying our application`,
    replies: [],
  },
];

const devOps = [

];

const blockChain = [

];

const classMap = {
  '101': {
    name: "Web Dev 101",
    description: "intro to web dev",
    history: webDev101,
  },
  '201': {
    name: "Web Dev 201",
    description: "deep dive into web dev",
    history: webDev201,
  },
  '301': {
    name: "Dev Ops",
    description: "intro to dev ops",
    history: devOps,
  },
  '302': {
    name: "Block Chain",
    description: "learn all the newest buzzwords that no one will really understand",
    history: blockChain,
  },
};

export default classMap;
