// Pseudo code for our To Do App:

// 1- Save the values / DOM elements we will need to interact with
    // First question we asked:: What are we tracking? we are tracking the submit event which is the purpose of form element in our HTML
    // let's query the DOM for the form element and save it within a variable
    // let's query the DOM for the input element and save it within a variable

// 2- Attach a submit event listener to the form element.
    // Pass in 2 arguments to the event listener method:
        // a) the event you are listening for
        // b) the callback function which will hold the logic we wish run ONCE the event is heard (AKA occurs on the page)

    // Save the text value from the input within a variable
    
    // IF the user submits a to-do (check whether the value of the input is not empty) then:
        // create a li element
            // add a FA icon to the li
            // add the text from the to-do that the user entered to the li
        
        // append the li element to the ul element
    // ELSE alert the user to please submit a valid to-do

// 3- TO THINK ABOUT LATER:: How do we track when the task is done?

