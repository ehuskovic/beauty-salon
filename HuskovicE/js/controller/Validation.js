/**
 * Project 1 - client programming 
 * @author Ella Huskovic 
 * Validtion is a class that is used for validating the form, 
 * Validation could also go into the view class but I put it as separate class to have everything more ordered 
 * Validation contructor takes view as parameter 
 */
export class Validation {

    /**
     * Contructor takes the view as parameter because view is acctually responsible for validation 
     * @param {View.js} view 
     */
    constructor(view) {
        this.firstName = view.firstName;
        this.lastName = view.lastName;
        this.email = view.email;
    }

    /**
     * Check inputs is a method that is going to check if each input is proper 
     * There are three inputs that should be provided - first name, last name and email 
     * if one of those three inputs are not provided than user will get the message that the field cannot be empty 
     * first name and last name are allowed to contain just letters, no numbers - that is checked in the method isLastName and isText using regex found on stackowerflow 
     * email is allowed to take proper email. it should containg @ and .com in the end, also checked using regex froom isEmail method 
     * calling trim on inputs to distiguis white space 
     * validation was learned from the stakowerflow and youtube videos 
     */
    checkInputs = () => {
        let firstNameValue = firstName.value.trim();
        let lastNameValue = lastName.value.trim();
        let emailValue = email.value.trim();

        if (firstNameValue === '') {
            this.setErrorFor(firstName, 'This field cannot be empty!');
        } else if (!this.isText(firstNameValue)) {
            this.setErrorFor(firstName, 'First name not valid, please try again');
        } else {
            this.setSuccessFor(firstName);
        }

        if (lastNameValue === '') {
            this.setErrorFor(lastName, 'This field cannot be empty!');
        } else if (!this.isLastName(lastNameValue)) {
            this.setErrorFor(lastName, 'Last name not valid, please try again');
        } else {
            this.setSuccessFor(this.lastName);
        }

        if (emailValue === '') {
            this.setErrorFor(email, 'Email can not be empty');
        } else if (!this.isEmail(emailValue)) {
            this.setErrorFor(email, 'Email is not valid');
        } else {
            this.setSuccessFor(email);
        }

    }

    /**
     * This method will set the error in div called small when one of the inputs is not proper 
     * we call formmControl from html using input.parentElement
     * taking div small from the html 
     * putting the message inside of the div and specifiying where 
     * @param {String} input 
     * @param {String} message 
     */
    setErrorFor(input, message) {
        let formControl = input.parentElement;
        let small = formControl.querySelector('small');
        small.innerText = message;
        formControl.className = 'form-control error';
    }

    /**
     * We let the user to know that inputs are valid 
     * @param {String} input 
     */
    setSuccessFor(input) {
        let formControl = input.parentElement; // we are accessing form Control div with this
        formControl.className = 'form-control success';

    }

    /**
     * method that is using regex to check if the email is proper
     * @param {String} email 
     */
    isEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }

    /**
     * method to check if first name containes just letters without numbers 
     * @param {String} firstName 
     */
    isText(firstName) {
        return /^[A-Za-z]+$/.test(firstName);
    }

    /**
     * method that checks that lastname contains just letters without numbers 
     * @param {string} lastName 
     */
    isLastName(lastName) {
        return /^[A-Za-z]+$/.test(lastName);
    }
}
