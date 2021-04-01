/**
 * project 1 - client programming 
 * @author Ella Huskovic
 * class that holds all important class for my project 
 * Model - to get the data, name of selects and pathe to the images 
 * Con troller - handles events and dynamic for this project 
 * View - everything what user sees is i this part of the assignment 
 * browserVersion - first thing to be checked if browser supports ES6 
 */

import { Model } from './model/Model.js';
import { Controller } from './controller/Controller.js';
import { View } from './view/View.js';
import { BrowserVersion } from './util/BrowserVersion.js';


window.onload = function () {
	new BrowserVersion().checkIfBrowserSupportsES6();
	const app = new Controller(new Model(), new View());

};



