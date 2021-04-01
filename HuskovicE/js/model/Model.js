/**
 * Project 1 - client programming 
 * @author Ella Huskovic 
 * Model is a class that holds the data from the select in nailData and that holds the path for the images 
 * nailData and img have the objects with the same name because image appears upon the users selection from naildata
 */

export class Model {

    /**
     * This is a constructor from Model class 
     * Inside a constructor there is a nailData object that holds values for selects 
     * There is also img object that holds a path to the pictures 
     */
    constructor() {
        this.nailData = {
            "Choose the length": "length",
            "Long": {
                "Choose the collection": "color",

                "Blue": {
                    "Choose a color": "color",
                    "Light blue": 0,
                    "Dark blue": 0
                },

                "Nude": {
                    "Choose a color": "color",
                    "Larissa nude": 0,
                    "Special nude": 0
                }
            },

            "Short": {
                "Choose the color": "color",
                "Red": {
                    "Choose a finish": "finish",
                    "Creme red": 0,
                    "Pearl red": 0
                },

                "Pink": {
                    "Choose a finish": "finish",
                    "Creme pink": 0,
                    "Pearl pink": 0
                }
            }
        };

        this.img = {
            "Long": "././images/longNail.png",
            "Short": "././images/shortNail.png",
            "Blue": "././images/longNail-blue.png",
            "Nude": "././images/longNail-nude.png",
            "Light blue": "././images/longNail-lightBlue.png",
            "Dark blue": "././images/longNail-darkBlue.png",
            "Larissa nude": "././images/longNail-larissaNude.png",
            "Special nude": "././images/longNail-special.png",
            "Red": "././images/shortNail-red.png",
            "Pink": "././images/shortNail-pink.png",
            "Creme red": "././images/shortNail-redCreme.png",
            "Pearl red": "././images/shortNail-redPearl.png",
            "Creme pink": "././images/shortNail-pinkCreme.png",
            "Pearl pink": "././images/shortNail-pinkPearl.png"
        };
    }
}