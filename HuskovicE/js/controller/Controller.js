import { Validation } from './Validation.js';

/**
 * Project 1 - client programming 
 * @author Ella Huskovic 
 * This is a Controller class that handles events, it is a bond between View.js and Model.js that can not hav irect relationship in MVC architecture 
 * The idea of creating options aand setting length of the select is taken from the class review. 
 */

export class Controller {

    /**
     * contructor of Controller.js that has two parameters. It is connection between Model.js and View.js class 
     * In Controller.js class I made several methods and I call them inside a contructor class because it looks more organized. 
     * @param model Model.js class
     * @param view View.js class
     */
    constructor(model, view) {
        this.model = model;
        this.view = view;


        this.view.set();

        /**
         * Taking id of the elements and calling methods properly so options are dynamically created. Based on the item chosen by the user, picture shows by calling a method setNailImage
         */
        this.view.selects.forEach(selectElement => {
            selectElement.onchange = (event) => {
                if (event.target.id === 'base') {
                    this.handleLengthSelect(event);
                } else if (event.target.id === 'collection') {
                    this.handleColorCollectionSelect(event);
                } else if (event.target.id === 'color') {
                    this.handleStyleSelect(event);
                }
                this.view.setNailImage(event.target, this.model.img);
            }
        });



        this.bindSelectSubmit();
        this.bindFormSubmit();
        this.saveLocalStorageOnchange();
    }


    /**
     * Method that is handling select and options for the first phase where user can choose the length of the nail 
     * In this method we are also taking care that no previous selections are being saved when select is changed 
     * In this method we call addOptions() method from the view that is adding the options for the next select that is to come. 
     * @param {event} event as a parameter so we can create options based on event.target that is showing us our select 
     */
    handleLengthSelect = (event) => {
        if (event.target.selectedIndex == 0) {
            this.view.colorSelect.length = 1;
            this.view.styleSelect.length = 1;
            return;
        } else {
            this.view.colorSelect.length = 0;
            this.view.styleSelect.length = 1;
        }
        this.view.addOptions(event.target.nextElementSibling, [event.target.value], this.model.nailData);
    }

    /**
     * Method that handles second phase of select in creating nail. 
     * Method puts the stySelect's from the view to 1 when second select is 0 and to 0 when it is not. 
     * @param {event} event parameter helps to get targeted value and to create options for last, third select by calling a method addOptions
     */

    handleColorCollectionSelect = (event) => {
        if (event.target.selectedIndex == 0) {
            this.view.styleSelect.length = 1;
            return;
        }
        this.view.styleSelect.length = 0;
        this.view.addOptions(event.target.nextElementSibling, [event.target.previousSibling.value, event.target.value], this.model.nailData);
    }

    /**
     * Handle style selects method handles input of the selected index to be 0. 
     * @param {event} event 
     */
    handleStyleSelect = (event) => {
        if (event.target.selectedIndex == 0) {
            return;
        }
    }

    /**
     * Method that is being triggerd when SAVE button right above selects is clicked. 
     * preventDefault if the event does not get explicitly handled, its default action should not be taken as it normally would be
     * than we call passVal() method from the controller that is going to set the information about selects into local storage 
     * then setorderText method is called, that will take the data from the local storage, about the nails, and put them into form field specified. 
     */
    bindSelectSubmit = () => {
        this.view.submit.onclick = (event) => {
            event.preventDefault();
            this.view.passVal();
            this.view.setOrderText();
        };
    }

    /**
     * Method that is being triggerd when user clicks SUBMIT button right below the form 
     * preventDefault if the event does not get explicitly handled, its default action should not be taken as it normally would be
     * calling passValForm method from the view that is passing the data from the form into the local storage 
     * making an object of Validation class and calling checkInputs method 
     * checkInputs method will check if inputs that user provided are proper. There should not be empty field, email should be propoer and first name and last name can not contain the numbers 
     * if form is proper the firld will become green 
     * if form is not proper field will be red 
     */
    bindFormSubmit = () => {
        this.view.formSubmit.onclick = (event) => {
            event.preventDefault();
            this.view.passValForm();
            new Validation(this.view).checkInputs();
            this.view.passValForm();
        };
    }

    /**
     * This method will save the local storage onchange
     * If you open localStorage and try to change something in the form field, change is seen automatically in local storage, without submiting form. 
     * inputArray from the view are data from the form, first name, last name and email and passValForm from the view is called because it saves the data to local Storage 
     */
    saveLocalStorageOnchange = () => {
        this.view.inputArray.forEach(element => {
            element.oninput = () => {
                this.view.passValForm();
            }
        });

    }



}