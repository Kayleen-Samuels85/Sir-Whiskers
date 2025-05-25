var pics = [
  "./Images/grey-cat.jpg", //0   //Array holding the paths to diffrent cat images
  "./Images/cute-cat.jpg", //1
  "./Images/sleepy-cat.jpg", //2
  "./Images/cat-with-red-ball.jpg", //3
  "./Images/kitty-under-blanket.jpg", //4
  //5 //Array ends here , total 5 images
];

var btn = document.querySelector("button"); //Select the first button on the page
var img = document.querySelector("img"); //Select the first image on the page
var counter = 1; //Initialise counter to 1 (starting from the second image)

btn.addEventListener("click", function () {
  //When the button is clicked
  if (counter === 5) {
    //When the counter is 5
    counter = 0; //Reset counter to 0 or pic 0
  }
  img.src = pics[counter]; //Set the image source to the current pictgure in the array[]
  counter = counter + 1; //Increment(increase) the counter by 1
});

//Notes in JS:
//When the button is clicked, it checks if the counter is 5. If it is, it resets the counter to 0.
//It then updates the image source (img.src) to the picture corresponding to the current counter.
//Finally, the counter is increased by 1.
