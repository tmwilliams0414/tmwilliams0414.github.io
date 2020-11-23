Circularity
===

# Overview

The portrait of the programmer as a young artist continues, using random number generation, color, and velocity applied to circles in this little motion poem. Using the draw line API, you'll create a cool randomized piece of art. 

Some concepts you'll practice and learn:
* Drawing with CreateJS and our draw utility.
* Leveraging the power of Arrays to manage large quantities of data
* Utilizing loops to reduce repetitive code
* Variable declaration and initialization.
* Function invocation and passing arguments to functions.
* Conditional statements - making decisions in code.
* Recognizing code blocks.
* Calculating coordinates in a cartesian system.
* Calculating boundaries.
* Animating math

Note that **this app will run _in a web browser_**, preferably Chrome.

## Run the program
Open the `index.html` file and follow the instructions below to run your program:
- **Gitpod**: Make sure to install the **Live Server** extension. Then, right click on the `index.html` file and select **Preview with Live Server**

<hr>

# TODOs

All coding will be done in the `js/init.js` file. Complete each TODO in order and make sure to read each step's instructions entirely before coding. Often, questions you have will be answered by the next step or TODO.

## TODO 1: Draw a circle

```js
var circle = draw.randomCircleInArea(canvas, true, true, '#999', 2);
view.addChild(circle);
```

For this project, you have been provided with the 2 functions above to help you create a beautiful animation:

* `draw.randomCircleInArea` creates a new circle drawing and creates all of the data associated with that new circle. The data we care about are the circle’s `x`, `y`, `velocityX`, `velocityY`, and `radius`. All of these values are stored together in an *object* which is returned by the function.

* `view.addChild` takes the `circle` object we just created and makes it visible. Without this step, we would have the data for the circle, but it would not be rendered. 


Furthermore, `circle` stores the returned object with `circle.x`, `circle.y`, `circle.velocityX`, `circle.velocityY`, `circle.radius` properties.

**CODE**: Open the `js/init.js` file if you haven't already done so. Below the `PROGRAM SETUP` area add the two lines of code at the top of this TODO. Save your `js/init.js` file and refresh the preview and you will see a circle on your screen.

<hr>

## TODO 2: Reposition the circle

Now lets get the circle moving! This TODO has 2 steps.

### Step 1: Set a random velocity for the circle

In order to move the circle, we first need to change it's `.velocityX` and `.velocityY` properties which are, by default, set to `0`.

Instead, we want these values to be randomly chosen numbers between `-2` and `2`. Given any two values, the function below will return a random decimal value between those two numbers.

```js
function randomNumberBetween(min, max) {
    var difference = max - min;
    var randomValue = Math.random() * difference;
    return min + randomValue;
}

randomNumberBetween(2, 5); // returns a random decimal between 2 and 5
```

This function uses some slightly confusing math to get the job done so let me briefly explain:

* `max - min`: the difference between the largest (`5`) and smallest (`2`) values which tells us how many values are in between (`3`)
* `Math.random() * difference`: a random number between `0` and `difference`, in this case between `0` and `3`. For the sake of example, let's say this random value is `1.234`.
* `min + randomValue`: Add this random value to the minimum value. In this example, `2 + 1.234 === 3.234`. The smallest value returned will be `min` while the largest value will be `min + difference === max`.

**CODE**: Still in the `PROGRAM SETUP` section but above your code from TODO 1, declare the `randomNumberBetween()` function. Then, add to your code from TODO 1 such that you assign random values between `-2` and `2` to `circle.velocityX` and `circle.velocityY`.

<details> <summary> Hint </summary>

<p>

Upon completing this step, your code should look like this:

```js

////////////////////////////////////////////////////////////
////////////////// PROGRAM SETUP ///////////////////////////
////////////////////////////////////////////////////////////

function randomNumberBetween(min, max) {
    var difference = max - min;
    var randomValue = Math.random() * difference;
    return min + randomValue;
}

var circle = draw.randomCircleInArea(canvas, true, true, '#999', 2);
view.addChild(circle);
circle.velocityX = randomNumberBetween(-2, 2);
circle.velocityY = randomNumberBetween(-2, 2);
```

</p>
</details>

### Step 2: Animate the circles

We can use the same math from bouncing box to recalculate the new position of the circle. In bouncing box we did the following:

```js
positionX = positionX + speed;
```

In this project, the data is stored in a single object in the `circle` variable rather than in multiple variables:

* Instead of `positionX` we have `circle.x` (and `circle.y`)
* Instead of `speed` we have `circle.velocityX` (and `circle.velocityY`)

**CODE**: Inside the `update` function's `{code block}`, reposition the circle using the `circle.x`, `circle.velocityX`, `circle.y` and `circle.velocityY` properties. If done correctly, the circle should move!

<details><summary>Hint</summary>
<p>

```js
function update() {
    // move the circle on each update
    circle.x = circle.x + circle.velocityX;
    circle.y = circle.y + circle.velocityY;
}
```

</p>
</details>

<hr>

## TODO 3: 5 circles

In this step, we will expand the project and create multiple circles! This TODO will have 2 steps.

### Step 3.1) Draw 5 circles

**CODE** Again in the `PROGRAM SETUP` area, duplicate the code from TODO 1 so that you have a total of 5 circles drawn on your screen. For each circle, you should modify the name of the variable so that each circle has it's own variable name.

<details><summary>Hint</summary>

```js
var circle1 = draw.randomCircleInArea(canvas, true, true, '#999', 2);
view.addChild(circle1);
circle1.velocityX = randomNumberBetween(-1, 1);
circle1.velocityY = randomNumberBetween(-1, 1);

var circle2 = draw.randomCircleInArea(canvas, true, true, '#999', 2);
view.addChild(circle2);
circle2.velocityX = randomNumberBetween(-1, 1);
circle2.velocityY = randomNumberBetween(-1, 1);

//... the same thing above to create circle3, circle4, and circle5
```

</details>

### Step 3.2) Move 5 circles

**CODE** Now, duplicate your code from TODO 2 to move all 5 of your circles. You will need to modify the code each time so that each `circle` variable is used.

<details><summary>Hint</summary>
<p>

```js
circle1.x = circle1.x + circle1.velocityX;
circle1.y = circle1.y + circle1.velocityY;

circle2.x = circle2.x + circle2.velocityX;
circle2.y = circle2.y + circle2.velocityY;

//... the same thing above for circle3, circle4, and circle5
```

</p>
</details>

<hr>

## TODO 4: Keep the circles on the screen

We have created the outline for a function called `game.checkCirclePosition`. The purpose of this function is to take a circle object and make sure that it doesn't leave the boundaries of the board. 

This TODO has 2 steps. Make sure to complete them all before moving on.

### Step 4.1) Call `game.checkCirclePosition` on each of your circles

**CODE:** Inside the `update` function's `{code block}`, call `game.checkCirclePosition()`  on each circle variable like so:

```javascript
game.checkCirclePosition(circle1);
game.checkCirclePosition(circle2);
// and so on for circle3, circle4, circle5
```

**Save your code and refresh your program.**

Now, as your circles move off the scren, they _should_ come back but you'll notice that the circles only come back if they exit through the right side of the screen. In the next part, we'll fix this.

### Step 4.2) Complete the `game.checkCirclePosition()` Function

Currently, the function contains the following code:

```javascript
game.checkCirclePosition = function(circle) {
    // if the circle has gone past the RIGHT side of the screen then place it on the LEFT
    if (circle.x > canvas.width) {
        circle.x = 0;
    }
    // ...
}
```

Let me briefly explain the code above:

* The parameter `circle` is the variable used to hold a circle object that can be given to the function. 
* Upon receiving a `circle`, the function checks to see if that `circle` has drifted beyond the right edge of the screen (`circle.x > canvas.width`).
* If it has, move the received `circle` to the left edge of the screen (`circle.x = 0`).

## (Important Part)
The `canvas` represents the blank screen and allows us to add drawings to it. The canvas has 2 very important *properties*:

* `canvas.width` is the maximum x-coordinate on the screen.
* `canvas.height` is the maximum y-coordinate on the screen.

The minimum x and y coordinates are `0` and `0`. This is called the origin, where the x-axis and y-axis intersect at 0, and is always located in the top left corner of the browser window.

<img src="https://github.com/OperationSpark/circularity/blob/master/img/screenBounds.png?raw=true" height="300px">

**CODE:** Add additional `if` statements to check the other three sides of the screen. Your Function should look like this:

<details> <summary> Left Side Hint </summary>
<p>

```js
game.checkCirclePosition = function(circle) {
    // code that checks the other sides
    if (circle.x < 0) {
        circle.x = canvas.width
    }
    // code that checks the other sides
}
```

</p>
</details>

<details> <summary> Bottom Side Hint </summary>
<p>

```js
game.checkCirclePosition = function(circle) {
    // code that checks the other sides
    if (circle.y > canvas.height) {
        circle.y = 0;
    }
    // code that checks the other sides
}
```

</p>
</details>

<details> <summary> Top Side Hint </summary>
<p>

```js
game.checkCirclePosition = function(circle) {
    // code that checks the other sides
    if (circle.y < 0) {
        circle.y = canvas.height;
    }
    // code that checks the other sides
}
```
</p>
</details>

### Step 4.3) BONUS CHALLENGE (optional)

The circle is centered around its own `x` and `y` position. You'll notice that the code above causes the circles to suddenly disappear and reappear at the edges. It would be nicer if the circles smoothly drifted off, and back on, the screen.

To find the outer right edge of the circle, we can use the `circle.radius` property like so:

```javascript
circle.x + circle.radius;
```

**CODE:** Make the circle more smoothly exit and enter the screen by modifying your `if` statements to include the circle.radius property

<details><summary> Hint </summary>
<p>

```js
if (circle.x - circle.radius > canvas.width) {
    circle.x = 0 - circle.radius;
}
if (circle.x + circle.radius < 0) {
    circle.x = canvas.width + circle.radius;
}

if (circle.y - circle.radius > canvas.height) {
    circle.y = 0 - circle.radius;
}
if (circle.y + circle.radius < 0) {
    circle.y = canvas.height + circle.radius;
}
```

</p>
</details>

# Pause and take a break. 

Well done so far! Check in with your instructor to make sure your code is complete for the first 4 TODOs before continuing on.

## TODO 5: Arrays
## (You can skim this part; the work starts at TODO 5.1)

Expanding this project to 5 circles is quite easy and fairly quick by copying and pasting code. Expanding the project to 100 circles, however, would take a while.

The main issue is that we would need 100 separate variables that each contain the data for each circle. We would also need to have 100 copies of the code for creating and moving each circle. This sort of repetition presents an opportunity to program smarter, not harder by doing the following:

* Using an **Array** will enable us to better manage large quantities of data that all need to be treated the same.
* Using **loops** will enable us to more efficiently repeat code.

This TODO will introduce Arrays and TODO 6 will introduce Loops. This TODO will have multiple steps.

### Step 5.1) Introduce Arrays to manage data

The first step is to create an Array that will hold all of the circle objects. Remember, the syntax for creating an array is:

```js
var myArray = [];
```

Let me briefly explain this example:

* `var myArray`: we begin by declaring a new variable to hold this Array of data. In this example we give it the name `myArray`
* `[]`: the `[` and `]` mark the beginning and end of the Array. Values that are added to the Array will go between those brackets.

**CODE**: In the `PROGRAM SETUP` area and above your code for drawing your circles, declare a new array called `circles`.

### Step 5.2) Push every circle into the Array

Now we need to add each circle object into the `circles` Array. The syntax for pushing a variable into an Array is:

```js
myArray.push(value);
```

**CODE:** For each circle that you draw and add to the `view`, push that `circle` variable into the `circles` array.

<details><summary>Hint</summary>
<p>

```js
// you should already have these 4 lines
var circle1 = draw.randomCircleInArea(canvas, true, true, '#999', 2);
view.addChild(circle1);
circle1.velocityX = randomNumberBetween(-1, 1);
circle1.velocityY = randomNumberBetween(-1, 1);

// add this line below
circles.push(circle1);

// do the same for each of your circle variables
```

</p>
</details>

<hr>

## TODO 6: Loops

Ok so big whoop, our data is now in Array. But wasn't the purpose to _reduce_ the number of variables, not make more?

When we introduce a loop, all of those extra variables will go away. Remember, to create a loop you can follow the example below. This example will run 10 times by doing the following:

* `var count = 1`: start counting at 1
* `count++`: count up by 1s
* `count <= 10`: keep counting *while* `count <= 10` (at 11 it won't run)

```js
for (var count = 1; count <= 10; count++) {
    // code block for loop
}
```

### Step 6.1) Use loops to draw 100 circles

**CODE**: Identify your repetitive code that creates a circle and move it inside a `for` loop. The loop should run 100 times. and you can use the `{code block}` below for your loop:

(Note: completing this step will cause your circles to disappear. We'll get to that in the next step)

<details><summary>Hint</summary>
<p>

```js
for (var count = 1; count <= 100; count++) {
    // code block for the for loop
    var circleN = draw.randomCircleInArea(canvas, true, true, '#999', 2);
    view.addChild(circleN);
    circleN.velocityX = randomNumberBetween(-1, 1);
    circleN.velocityY = randomNumberBetween(-1, 1);
    circles.push(circleN);
}
```

We can keep using the same variable `circleN` over and over because we only really need to put our new circle object in that variable for a few lines of code. After the new circle object is pushed into the `circles` Array, we can safely overwrite the `circleN` variable with the next circle object on the next loop.

</p>
</details>

### Step 6.2) Iterate with loops to reduce repetition

As I mentioned above, your circles will be gone. That's because we have removed the variables `circle1`, `circle2`, etc... and replaced them with the Array `circles`.

The most straightforward (but repetitive and tiresome) approach to fixing this would be to do the following:

```js
circles[0].x = circles[0].x + circles[0].velocityX;
circles[0].y = circles[0].y + circles[0].velocityY;

circles[1].x = circles[1].x + circles[1].velocityX;
circles[1].y = circles[1].y + circles[1].velocityY;

// do this for circles[2], circles[3], ... circles[99]
```

Let me briefly explain the code above:
### (You can just skim down to the CODE section if you understand how arrays work)

* We use **Bracket Notation** to access the one circle at a time from the `circles` Array. For example, `circles[0]` will give us the first circle object in the Array.
* Each value in the Array is an object so we then use **Dot Notation** to access/modify the `.x` , `.y`, `.velocityX`, and `.velocityY` properties.
* The code above is repeated for every value in the `circles` Array from index 0 to index 99.

Obviously, doing this 100 times would be incredibly time consuming and inefficient. We want to work smarter, not harder by using loops!

**CODE**: In the `update` function's `{code block}`, identify your repetitive code and move it into a `for` loop. The loop should run once for each index/value in the `circles` array. 

<details><summary>Hint</summary>
<p>

```js
for (var i = 0; i <= circles.length-1; i++) { 
    circles[i].x = circles[i].x + circles[i].velocityX;
    circles[i].y = circles[i].y + circles[i].velocityY;
    game.checkCirclePosition(circles[i]);
}
```
A few things to note about this solution:

* The loop starts counting with `i = 0`, the first index of every Array.
* The loop increases `i` by `1` since indexes of an Array increase by 1.
* The loop stops after `i = circles.length-1`, the last index of the `circles` Array.
* `circles[i]` accesses a different value from the `circles` array depending on the value of `i`
</p>
</details>

<hr>

# Pushing your work back to GitHub

After you've completed this project, run (cut and paste) the four commands below into a Bash Terminal:

(If you can't find your bash terminal, go to **Window** --> **New Terminal**)

1. Add all your changes to a changeset:
    
        git add -A
    
2. Commit your changeset:
    
        git commit -m "create awesome platformer game"
    
3. Push your changeset to your GitHub forked repository:
   
        git push
    

Great work! Pat yourselve on the back and show off your animation!

&copy; Operation Spark 2015
