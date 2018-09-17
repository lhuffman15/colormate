
// A HTML range slider
var slider;
var sliderSat;
var sliderBri;
var sliderTran;
var comp;
var triad1;
var triad2;
var myFont;
var logoColor;
var elx, ely, eld;
var img;
var anl1;
var anl2;


 function preload() {
   myFont = loadFont('Gotham-Light.otf');
 }

function setup() {
  createCanvas(700, 400);
  // hue, saturation, and brightness
  colorMode(HSB, 360, 100, 100, 100);
  // slider has a range between 0 and 255 with a starting value of 127
  slider = createSlider(0, 360, 319);
	slider.position(220,60);

	sliderSat = createSlider(10, 100, 100);
	sliderSat.position(220,110);

	sliderBri = createSlider(10, 100, 100);
	sliderBri.position(220,160);

	sliderTran = createSlider(10, 100, 60);
	sliderTran.position(220,210);

	ely = 140;
	eld = 120;
	elx = 110;

	logoColor = 0;



}

function draw() {
  background(97);
  strokeWeight(1);
	stroke(126);
	line(400, 0, 400, 400);
	fill(250);
	rect(400, 0, 400, 700);
	textFont(myFont);
	textSize(16);
	noStroke();
	fill(60);
	text("PRIMARY COLOR", 40, 50);
	textSize(13);
	noStroke();
	fill(60);
	text("Hue", 220, 50);
	text(slider.value(), 330, 50);
	text("Saturation", 220, 100);
	text(sliderSat.value(), 330, 100);
	text("Brightness", 220, 150);
	text(sliderBri.value(), 330, 150);
	text("Alpha", 220, 200);
	text(sliderTran.value(), 330, 200);




  // Set the hue according to the slider
  //stroke(slider.value(), 255, 255);
	stroke(245);
	strokeWeight(1);
	fill(slider.value(), sliderSat.value(), sliderBri.value(), sliderTran.value());
  ellipse(elx, ely, eld, eld);
	var d=dist(mouseX, mouseY, elx, ely);

	//reset to primary color
	if (mouseIsPressed && d<=60) {
		logoColor = 0;
		fill(slider.value(), sliderSat.value(), sliderBri.value()/2, sliderTran.value());
	  ellipse(elx, ely, eld, eld);
	}


	//complimentary button
	fill(245);
	stroke(245);
	rect(25, 265, 107, 20, 10)
	noStroke();
	fill(60);
	text("Complimentary", 30, 280);

	if (mouseIsPressed && mouseX>25 && mouseX<132 && mouseY>265 && mouseY<285) {
		fill(70);
		stroke(245);
		rect(25, 265, 107, 20, 10)
		noStroke();
		fill(96);
		text("Complimentary", 30, 280);
		logoColor = 1;
	}

	//analogous button
		fill(245);
		stroke(245);
		rect(154, 265, 86, 20, 10);
		noStroke();
		fill(60);
		text("Analogous", 163, 280);

		if (mouseIsPressed && mouseX>159 && mouseX<232 && mouseY>265 && mouseY<285) {
			fill(70);
			stroke(245);
			rect(154, 265, 86, 20, 10);
			noStroke();
			fill(96);
			text("Analogous", 163, 280);
			logoColor = 2;
		}

		//triad button
			fill(245);
			stroke(245);
			rect(265, 265, 86, 20, 10);
			noStroke();
			fill(60);
			text("Triad", 290, 280);

			if (mouseIsPressed && mouseX>270 && mouseX<346 && mouseY>265 && mouseY<285) {
				fill(70);
				stroke(245);
				rect(265, 265, 86, 20, 10);
				noStroke();
				fill(96);
				text("Triad", 290, 280);
				logoColor = 3;
			}

 //complimentary swatch

	stroke(245);
	fill(comp, sliderSat.value(), sliderBri.value(), sliderTran.value());
	rect(60, 300, 30, 30);

	comp = (slider.value()+180);

	if (comp > 360) {
		comp = comp - 360;
	}


	//analogous swatches

	stroke(245);
	fill(anl1, sliderSat.value(), sliderBri.value(), sliderTran.value());
	rect(180, 300, 30, 30);

	fill(slider.value()+30, sliderSat.value(), sliderBri.value(), sliderTran.value());
	rect(180, 350, 30, 30);

	anl1 = (slider.value()-30);

	if (anl1 <= 0) {
		anl1 = anl1 + 360;
	}

	anl2 = (slider.value()+30);

	if (anl2 > 360) {
		anl2 = anl2 - 360;
	}

	//triad swatches

	stroke(245);
	fill(triad1, sliderSat.value(), sliderBri.value(), sliderTran.value());
	rect(290, 300, 30, 30);

	triad1 = slider.value()+(120);

	if (triad1 > 360) {
		triad1 = triad1 - 360;
	}

	fill(triad2, sliderSat.value(), sliderBri.value(), sliderTran.value());
	rect(290, 350, 30, 30);

	triad2 = slider.value()-(120);

	if (triad2 <= 0) {
		triad2 = triad2 + 360;
	}

	//logo
var moveLogoY=-20;

	if (logoColor == 0){
		fill(slider.value(), sliderSat.value(), sliderBri.value(), sliderTran.value());
		triangle (505, 250+moveLogoY, 550, 300+moveLogoY, 595, 250+moveLogoY);
		fill(slider.value(), sliderSat.value(), sliderBri.value(), sliderTran.value());
		rect(505, 120+moveLogoY, 90, 128);
		fill(slider.value(), sliderSat.value(), sliderBri.value(), sliderTran.value());
    arc(550, 119+moveLogoY, 89, 89,  PI, PI+PI);
    strokeWeight(2);
    arc(550, 119+moveLogoY, 35, 35,  PI, PI+PI);
    textSize(25);
    text("ColorMate", 486,320+moveLogoY);
	}

	//Complimentary
	if (logoColor == 1){
		fill(slider.value(), sliderSat.value(), sliderBri.value(), sliderTran.value());
	triangle (505, 250+moveLogoY, 550, 300+moveLogoY, 595, 250+moveLogoY);
		fill(comp, sliderSat.value(), sliderBri.value(), sliderTran.value());
		rect(505, 120+moveLogoY, 90, 128);
		fill(slider.value(), sliderSat.value(), sliderBri.value(), sliderTran.value());
    arc(550, 119+moveLogoY, 89, 89,  PI, PI+PI);
    strokeWeight(2);
    arc(550, 119+moveLogoY, 35, 35,  PI, PI+PI);
    textSize(25);
    text("ColorMate", 490,320+moveLogoY);
	}

	//Analogous
	if (logoColor == 2){
		fill(slider.value(), sliderSat.value(), sliderBri.value(), sliderTran.value());
	  triangle (505, 250+moveLogoY, 550, 300+moveLogoY, 595, 250+moveLogoY);
		fill(anl2, sliderSat.value(), sliderBri.value(), sliderTran.value());
		rect(505, 120+moveLogoY, 90, 128);
		fill(anl1, sliderSat.value(), sliderBri.value(), sliderTran.value());
    arc(550, 119+moveLogoY, 89, 89,  PI, PI+PI);
    strokeWeight(2);
    arc(550, 119+moveLogoY, 35, 35,  PI, PI+PI);
    textSize(25);
    text("ColorMate", 490,320+moveLogoY);
	}

	//triad
	if (logoColor == 3){
		fill(slider.value(), sliderSat.value(), sliderBri.value(), sliderTran.value());
	  triangle (505, 250+moveLogoY, 550, 300+moveLogoY, 595, 250+moveLogoY);
		fill(triad1, sliderSat.value(), sliderBri.value(), sliderTran.value());
		rect(505, 120+moveLogoY, 90, 128);
		fill(triad2, sliderSat.value(), sliderBri.value(), sliderTran.value());
    arc(550, 119+moveLogoY, 89, 89,  PI, PI+PI);
    strokeWeight(2);
    arc(550, 119+moveLogoY, 35, 35,  PI, PI+PI);
    textSize(25);
    text("ColorMate", 490,320+moveLogoY);
	}

  // Edit Logo button
  var delX=-30;
  var delY=5;
  fill(90);
  stroke(90);
  rect(490+delX, 350+delY, 75, 20, 8);
  noStroke();
  fill(55);
  textSize(13);
  text("Edit Logo", 496+delX, 365+delY);

  if (mouseIsPressed && mouseX>490+delX && mouseX<570+delX && mouseY>350+delY && mouseY<370+delY) {
    fill(80);
    stroke(90);
    rect(490+delX, 350+delY, 75, 20, 8);
    noStroke();
    fill(100);
    textSize(13);
    text("Edit Logo", 496+delX, 365+delY);

  }

  // Submit Color button
  var delX2=100;

  fill(90);
  stroke(90);
  rect(490+delX+delX2, 350+delY, 75, 20, 8);
  noStroke();
  fill(55);
  textSize(13);
  text("SUBMIT ", 502+delX+delX2, 365+delY);

  if (mouseIsPressed && mouseX>490+delX+delX2 && mouseX<570+delX+delX2 && mouseY>350+delY && mouseY<370+delY) {
    fill(80);
    stroke(90);
    rect(490+delX+delX2, 350+delY, 75, 20, 8);
    noStroke();
    fill(100);
    textSize(13);
    text("SUBMIT", 502+delX+delX2, 365+delY);
  }


}
