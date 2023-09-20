let button;
var myParagraph;

function setup() {
  myParagraph = createP("html");
  myParagraph.position(0, 50);
  myParagraph.mouseClicked(makeRed);
  button = createButton('click me')
  button.position(0,0)
  button.mousePressed(makeBlue);
  slider = createSlider(0,255,100)
  slider.position(10,200)

}

function draw() {
myParagraph.position(mouseX, mouseY)

const fontSize = slider.value()
myParagraph.style("font-size", )
}

function makeRed() {
  myParagraph.style("color", "red");
}

function makeBlue() {
   myParagraph.style("color", "blue");
 }

 const image = document.getElementById(catImage)
 


/*

Some Questions:
0. What is this percent sign all about? (hint: it's "modulus")
         It finds the remainder when framecount is divided by 200 
1. Where, in the p5 reference, do we find all this DOM stuff?
         It is under the "create____" functions
2. Why is the text so large when it's just a "paragraph"?
         The font size in style is XXLarge
3. "color" and "red"? Where did those come from and where 
   could you find more style attributes that could be
   changed?

Some Things to Try:
0. Make the text follow the mouse pointer
1. Make a button
2. Make the button affect the style or position of some text
3. Make a picture that shows up on the page. Does it have to
   be created in p5 or can you just place it in the HTML?
   What's the difference?
4. Can you make the position of the image change when the
   button is pressed?
5. Make a slider and have it change the text size
6. Add some CSS in style.css to make the slider huge and
   rotated 30 degrees
6. "hide" the text when the image is double-clicked
   
*/