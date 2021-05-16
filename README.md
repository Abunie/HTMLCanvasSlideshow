# CanvasSlideshow
## Analysis and Design
This program contains only two files that are completely independent on each other:
1. The HTML (slideshow.html): The html file contains the basic html format for the slide show program and uses the general css for the entire project. Here I create the buttons, like the start/stop button, the random/sequential button and the forward/backward button, I also drew the blank canvas here and created the dropdown for the transitions here.
2. The Javascript (script.js): Using the Javascript file I was able to store the images and their captions in a json array and draw them on the blank canvas. The javascript file also control the different mode, random and sequential and also controls the forward and backward movement of the slide show when in sequential mode. Using the javascript I was also able to create various slide show transitions for displaying the images.

## Documentation of Implementation
This is breakdown of the different parts of this program and how I implemented them:
HTML File: Here I basically create the file using the regular html structure for the entire project and then I added features as needed, such as the canvas and the start/stop button. To enable these buttons, dropdowns and canvas to work as expected I added event handlers that redirected to various javascript functions that are explained below.

* Javascript File:In the Javascript file I defined a few variable that are used across all functions such as the index of the current image on the slide show, the current transition mode, the current sequence mode (random or sequential ) and the direction (forward or backward). I also defined a JSON array that contained the image src, the image number(index), and the caption. There were several functions that handled displaying the images on the slide show:

* slideshow(): This is the main function in this javascript file. It handles detecting the different modes, transitions and direction of the system and drawing the images on the canvas based on that.
### Sequential/Random Mode
For the sequential mode the images are just drawn based on the current index unto the canvas, and the indexes are incremented or decremented depending on the current direction of the system.
For the random mode I use the getRandomInt() function to get random indexes between 0 and 19 and use it to display random images unto the canvas.

### Transitions
First transition is the normal transition, as the implies I just display the images normally.
Next transition is corner effect, for this I start by drawing a very small image on the topleft corner of the canvas, and I slowly make the image, bigger until it has filled up the canvas.
For the swipe right efect, I start by drawing a small portion of the image on the left hand side of the screen and then I keep extending the image until it had filled the entire canvas.
Lastly for the grow effect, I start by drawing a small image in the middle of the canvas and gradually make it bigger till it fills up the canvas.
* setBackward(): This function does the job of setting the direction to backwards when in sequential mode and the backward button was clicked.
* setForward(): This function does the job of setting the direction to forward when in sequential mode and the forward button was clicked.
* RandomSequential(): This function jhandles changing the mode to sequential or random. It also removes the direction(forward and backward) buttons when in random mode and puts them back up in sequential mode.
* StartStop(): As the name implies this function starts or stops the slide show.
* changeTransition(t): Given a transition t, this function changes the transition of the slideshow.

## User Guide
1. To run this project you have to be connected to the a webserver for all the parts of this project to be working.
2. Next, click on the button below to run the program,the link would take you to the Slide show of the application, which should automatically start running.
3. To stop the slide show you can click on the start/stop button, at the topleft corner.
4. The random/sequential button is also right beside the start/stop button, you can click this button to change the mode from random to sequential of vice versa.
5. While in sequential mode, if you want to change the direction you can click the backwards button or click the forward button to move it back forward.
6. The transitions dropdown is on the right hand side of the page and change be changed to change the transition mode 
