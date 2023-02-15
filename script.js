// Pseudocode for our To Do App:

// 1- Save the values / DOM elements we will need to interact with
    // First question we asked:: What are we tracking? we are tracking the submit event which is the purpose of form element in our HTML
    // let's query the DOM for the form element and save it within a variable
    const formElement = document.querySelector('form');
    
    // let's query the DOM for the input element and save it within a variable
    const inputElement = document.querySelector('#toDoItem');

    // let's query the DOM for the ul element and save it within a variable
    const ulElement = document.querySelector('ul');
    
// 2- Attach a submit event listener to the form element.
    // Pass in 2 arguments to the event listener method:
        // a) the event you are listening for (in string format)
        // b) the callback function which will hold the logic we wish run ONCE the event is heard (AKA occurs on the page)
            // every time an event occurs, an event object is generated (we're going to pass that obj into the scope of the callback function)
    formElement.addEventListener('submit', function(event) {

        // default behaviour of a form is to refresh the page. So, we need to tell it NOT to carry out its default behaviour.
        event.preventDefault();
        console.log(event);

    // Save the entered text value from the input within a variable
        // NOTE: any info entered into a input element will always be available at the value property.
    const userToDo = inputElement.value;

    // NOTE: Form inputs ALWAYS return the value as string
        // if the user submits the form without entering anything, that returns an empty string

    // IF the user submits a to-do (check whether the value of the input is not empty) then:
        // STRETCH ERROR-HANDLING GOAL: how do we avoid adding empty strings with multiple space characters (probably RegEx)
    if (userToDo !== "") {
        console.log('User has entered a to do:', userToDo);
        // create a li element
        const liElement = document.createElement('li');

            // add a FA icon to the li by reassigning the value of that property to be the icon HTML
        liElement.innerHTML = '<i class="fa-regular fa-square"></i>'

            // add the text from the to-do that the user entered to the li
        
            // append the to-do as a child to the li element. Because it is a text content, we need to specifically create a text NODE and THEN append it.
        const toDoText = document.createTextNode(userToDo);
        liElement.appendChild(toDoText);

        // append the li element to the ul element
        ulElement.appendChild(liElement);

        // clear the input (value) once the form is submitted
        inputElement.value = "";
    } else {
        // ELSE alert the user to please submit a valid to-do
        alert('Please enter a valid task. Do not leave the input empty')
    }
    })



// 3- TO THINK ABOUT LATER:: How do we track when the task is done?
// STRETCH ERROR-HANDLING GOAL: how do we avoid adding empty strings with multiple space characters (probably RegEx)
