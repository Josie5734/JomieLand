
let jomii_pic = document.getElementById("jomii-pic"); //store img element 
let button_count = 0;
let animationid = null;

document.getElementById("jomii-button").addEventListener("click", function() {

    
    if (button_count % 2 == 0) { //if button counter is even, animation is true, else false
        animationid = rotate(animationid,jomii_pic); //call the spinning animation, true for play, false for stop
        console.log("spinning");
    } else {
        stoprotate(animationid,jomii_pic);
        console.log("not spinning");
    }

    button_count++;

}) //button click event

function rotate(id,image) {
    //image.style.rotate = "y 0deg"; //set image position to 0
    //let id = null; //the id of the animation for the Interval function
    id = setInterval(spinright,5); //start the animation, and assign its id to the id variable
    let position = 0; //current position of rotation

    function spinright() { //actual spinning function
        if (position == 360) { //resets the position to 0 once it does 2 full rotations, to keep the number from being to big
            position = 0;
        } 
        position++; //increase position by 1
        image.style.rotate = "y " + position + "deg"; //set the new position in the style
    }
    return id;
}

function stoprotate(id,image) {
    clearInterval(id);
    image.style.rotate = "y 0deg"; //set image position to 0
}