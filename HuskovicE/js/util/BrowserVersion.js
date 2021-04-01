/**
 * @author Ella Huskovic 
 * Project1: Client Programming 
 * This is a class that handles the browser support for my project 
 * At the onload first thing that happens is that it is checked if browser supports ES6 
 */
export class BrowserVersion {


    /**
     * contructor that holds the methods that are being created inside a BrowserVersion class 
     */
    constructor() {
        this.checkIfBrowserSupportsES6();
    }

    /**
     * checkIFBrowserSupportsES6() is supported by the browser by simply creating how the function looks in ES6
     * if browser 'recognises' the method that ES6 is supported and site will be reachable, otherwise it will direct the user tp open the site on firefox, a browser that 
     * checkes that for sure 
     */
    checkIfBrowserSupportsES6 = () => {
        try {
            new Function("(a = 0) => a");
        }
        catch (err) {
            this.redirect();
        }
    }

    /**
     * redirect the user to the other browser that supports ES6 
     */
    redirect = () => {

        alert('Please use browser that supports ES6!');
        window.location.href = "www.firefox.com";
    }

}