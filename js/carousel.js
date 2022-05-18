

//carousel

//Array storage class
let carouselArr = [];
//class Carousel
export class Carousel {
    //static properties
    static _size = 0;
    static _sequence = 0;
    static _interval = 1;
    //constructor
    constructor(img, desc, link){
        this._img = img;
        this.desc = desc;
        this.linkImg = link;
    }
    //accessor method
    setImg(img){
        this._img = img;
    }

    getImg(){
        return this._img;
    }

    setSize(size){
        this._size = size;
    }

    getSize(){
        return this._size;
    }

    setInterval(sec){
        this._interval = sec;
    }

    getInterval(){
        return this._interval;
    }

    setSequence(num){
        this._sequence = num;
    }

    getSequence(){
        return this._sequence;
    }



    static Start(arr){
        if(arr){

            if(arr.length > 0){
                Carousel.setSequence(0);
                Carousel.setSize(arr.length);
                Carousel.Next(); //start
                Carousel._interval = setInterval(function(){ Carousel.Next(); },5000);
            }
            
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next(){
        
    }
};
