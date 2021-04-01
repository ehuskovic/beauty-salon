import { SELECTS } from "../util/selectData.js";
import { Model } from "../model/Model.js";

/**
 * Project 1 - client programming 
 * This is a View class that is handling everything user can see, adding options to select, adding pictures, creating options and even handling the local storage 
 */

export class View {

    /**
     * Constructor of the View class that hold the important variables for te methods and that calls methods needed. 
     */
    constructor() {


        this.baseSelect = document.getElementById("base");
        this.colorSelect = document.getElementById("collection");
        this.styleSelect = document.getElementById("color");
        this.nailImage = document.getElementById("baseImg");
        this.firstName = document.getElementById("firstName");
        this.lastName = document.getElementById("lastName");
        this.email = document.getElementById("email");
        this.form = document.getElementById("form");
        this.formSubmit = document.getElementById("formSubmit");
        this.submit = document.getElementById("submit");
        this.inputArray = [this.firstName, this.lastName, this.email];
        this.selects = [this.baseSelect, this.colorSelect, this.styleSelect];
        this.result = document.getElementById("result");

        this.loadFromLocalStorage();
    }

    /**
     * Method that is creating option element and value for it, it has also a text node 
     * used to create first option, other are created upon first one 
     * @param {String} text 
     */
    createDomElement = (text) => {
        const option = document.createElement('option');
        option.setAttribute('value', text);
        const optionText = document.createTextNode(text);
        option.appendChild(optionText);

        return option;
    }

    /**
     * dynamically creating first option that is Choose the base and then user can choose between short nail or long nail. Here SELECTS is used and that is a place where names are held 
     * first options and select are important for the rest of the selects and options, because other options are 
     * being created upon this one 
     * called in Controller.js 
     */
    set = () => {

        for (let i = 0; i < SELECTS.length; i++) {
            this.baseSelect.appendChild(this.createDomElement(SELECTS[i]));
        }
    }


    /**
     * Simple method that is going to dynamically create an image upon what user selected 
     * images are called exectly the same as nailData, that is how program knows which image to put when.
     * called in Controller.js 
     * @param {String} selectElement 
     * @param {img path} img 
     */
    setNailImage = (selectElement, img) => {
        this.nailImage.src = img[selectElement.value];
    }

    /**
     * addOptions is a method that takes select, array and data as parameter 
     * this ,method will create option for second and third level based on a first option being created above 
     * this method is called in Controller.js 
     * creating a for in loop that will get data from nailData and then create options with that data in select 
     * @param {select} select 
     * @param {Array} arr 
     * @param {Model} nailData 
     */
    addOptions = (select, arr, nailData) => {
        for (let item in this.getNestedObject(arr, nailData)) {
            select.options.add(new Option(item, item));
        }
    }

    /**
     * Thod method will work with naildData and with which level we work 
     * For example in my project first level is to set base, user can choose the long and short nail 
     * then if we want go deeper inside nailData from the model this method will be executed 2 times for second level 
     * called in Controller.js 
     * @param {Array} key
     * @param {} parent 
     */
    getNestedObject = (keyArr, parent) => {
        let tmp = parent;
        keyArr.forEach(key => tmp = tmp[key]);
        return tmp;
    }

    /**
     * passval method is passing the value from selects to the localStorage 
     * called in Controller.js 
     */

    passVal = () => {
        let selectBase = document.getElementById('base').value;
        localStorage.setItem('baseValue', selectBase);

        let selectCollection = document.getElementById('collection').value;
        localStorage.setItem('collectionValue', selectCollection);

        let selectColor = document.getElementById('color').value;
        localStorage.setItem('colorValue', selectColor);
    }

    /**
     * passing the value from local storage to the result id in html that is in the form, in the first input user's choice will be seen 
     */
    setOrderText = () => {
        this.result.value = `${localStorage.getItem("baseValue")}  ${localStorage.getItem("collectionValue")} ${localStorage.getItem("colorValue")}`;
    }

    /**
     * pass the value from te form to the local storage 
     */

    passValForm = () => {
        this.inputArray.forEach(inputElement => {
            localStorage.setItem(inputElement.id, inputElement.value);
        });
    }

    /**
     * get the data for the local storage, for firstname, lastName and email 
     */
    loadFromLocalStorage = () => {
        this.firstName.value = localStorage.getItem("firstName");
        this.lastName.value = localStorage.getItem("lastName");
        this.email.value = localStorage.getItem("email");


    }


}

