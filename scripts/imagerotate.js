//rotated image function
let jimmyinfo = document.getElementById("jimmyinfo");
let jimmypic = document.getElementById("jimmypic");
let jimmystyle = getComputedStyle(document.getElementById("jimmypic"));
let jimmyangle = jimmystyle.getPropertyValue("rotate").substring(0,2);

//add eventlisteners
document.getElementById("jimmyleft").addEventListener("click", function() {rotateimage(jimmypic,"left");});
document.getElementById("jimmyright").addEventListener("click", function() {rotateimage(jimmypic,"right");});
document.getElementById("jimmyreset").addEventListener("click", function() { //reset function
    jimmypic.style.rotate="0deg"; 
    jimmyinfo.innerText = "jimmy is at 0 degrees";
});

jimmyinfo.innerText = "jimmy is at " + getdegrees(jimmypic) + " degrees";

//get the current rotation in degrees as an integer (assuming the value is "xdeg","xxdeg" or "xxxdeg")
function getdegrees(image) {
    let degrees = getComputedStyle(image).getPropertyValue("rotate"); //get the property value

    let numberdegrees; //hold the integer value

    if (degrees.length == 4) { //convert it to an integer by removing the "deg" and converting the remaining number
        numberdegrees = Number(degrees.substring(0,1));
    } else if (degrees.length == 5) {
        numberdegrees = Number(degrees.substring(0,2));
    } else if (degrees.length == 6) {
        numberdegrees = Number(degrees.substring(0,3));
    }
    
    return numberdegrees
}

//changes the "rotate" property value of the given image
function rotateimage(image,direction) {
    let rotatevalue = 10;   //how much to rotate by
    if (direction == "left") { //change to negative increase to go left
        rotatevalue = -rotatevalue;
    } 

    let current = getdegrees(jimmypic); //current value

    let newvalue = current + rotatevalue; //new value

    image.style.rotate=newvalue+"deg"; //change value

    jimmyinfo.innerText = "jimmy is at " + newvalue + " degrees"; //print the new value in the textbox below (temporary, will be removed in any real application) 

}