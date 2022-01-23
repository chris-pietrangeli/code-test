// This is the question funstions that contain questions and the answers. They are in multidimensional array with inner array elements
var questions = [
    {
        question: "How to write and IF statement for executing some code if 'i' is NOT equal to 5?",
        answers: [
            { text: "if (i != 5)", correct: true },
            { text: "if (i !=== 5)", correct: false },
            { text: "if i =! 5", correct: false },
            { text: "if (i <> 5)", correct: false }
        ]
    },
    { 
        question: "What does event .preventDefault() do?", 
        answers: [
            { text: "It stops the browser from reloading the page upon a form submission.", correct: true },
            { text: "It stops the browser from allowing the form submission event to occur.", correct: false },
            { text: "It stops the default javascript file from loading onto the page.", correct: false },
            { text: "It stops the browser from loading the style.css page.", correct: false }
        ]
    },
    { 
        question: "The browser event submit allows us to do the following:", 
        answers: [
            { text: "Submit a form using a button.", correct: false },
            { text: "Submit a form using the Enter Key.", correct: false },
            { text: "Submit a form using both a button and the Enter key.", correct: true },
            { text: "Submit a form using a click event only.", correct: false }
        ]
    },
    { 
        question: "How do we use javascript to get the information entered into a form's input field?",
        answers: [
            { text: "We can select the form's input element and use the value property to read it's data.", correct: true },
            { text: "We can select the form itself and use the value propert to read all of it's data.", correct: false },
            { text: "We can select the form's input element and use the textContent or innerHTML properties to read it's data.", correct: false },
            { text: "We can select the form's submit buton event and pull the data from an array.", correct: false }
        ]
    },
    { 
        question: "What is a pseudo-class?", 
        answers: [
            { text: "A CSS rule that contains no declarations.", correct: false },
            { text: "A CSS declaration that hides the element.", correct: false },
            { text: "An element that has more than one class.", correct: false },
            { text: "A CSS keyword to target an element's state.", correct: true }
        ]
    },
    { 
        question: "If you save your array of objects to the browser’s local storage and it looks like Object object when you visit it in Chrome’s DevTools, what’s wrong?", 
        answers: [
            { text: "The array wasn't stringified with JSON.stringify() before saving it in local storage.", correct: true },
            { text: "The array wasn't parsed with JSON.parse() before saving it to local storage.", correct: false },
            { text: "The array created wasn't coded correctly from the start.", correct: false },
            { text: "The Object created was put in the wrong location.", correct: false }
        ]
    },
    { 
        question: "What does the z-index property do?", 
        answers: [
            { text: "Removes an element from the DOM.", correct: false },
            { text: "Changes the stacking order of elements.", correct: true },
            { text: "Changes the opacity of an element.", correct: false },
            { text: "Forces an element to be positioned relatively.", correct: false }
        ]
    },
];