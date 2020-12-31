var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        
        app = window.opspark.makeApp(),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#000'),
        
        drawCircle,
        circles;
        
    
    window.opspark.makeGame = function() {
        
        window.opspark.game = {};
        var game = window.opspark.game;
        
        ////////////////////////////////////////////////////////////
        ///////////////// PROGRAM SETUP ////////////////////////////
        ////////////////////////////////////////////////////////////
        var circle;			// variable to hold a single circle when creating circles / iterating
        var circles = [];	// variable to store all circles in one Array
        
       function drawCircle(){
           circle = draw.randomCircleInArea(canvas, true, true, '#999', 2);
           physikz.addRandomVelocity(circle, canvas); 
           view.addChild(circle);
           circles.push(circle);
       }

       drawCircle();
       drawCircle();
       drawCircle();
       drawCircle();
       drawCircle();

        ////////////////////////////////////////////////////////////
        ///////////////// PROGRAM LOGIC ////////////////////////////
        ////////////////////////////////////////////////////////////
        
        /* 
        This Function is called 60 times/second producing 60 frames/second.
        In each frame, for every circle, it should redraw that circle
        and check to see if it has drifted off the screen.         
        */
        function update() {
    physikz.updatePosition( circles[0]);
	physikz.updatePosition( circles[1]);
	physikz.updatePosition( circles[2] );
	physikz.updatePosition( circles[3]);
	physikz.updatePosition( circles[4]);
           
    game.checkCirclePosition(circles[0] );
game.checkCirclePosition( circles[1]);
game.checkCirclePosition( circles[2]);
game.checkCirclePosition( circles[3]);
game.checkCirclePosition(circles[4]);
            
        }
    
        /* 
        This Function should check the position of a circle that is passed to the 
        Function. If that circle drifts off the screen, this Function should move
        it to the opposite side of the screen.
        */
        game.checkCirclePosition = function(circle) {

            // if the circle has gone past the RIGHT side of the screen then place it on the LEFT
            if ( circle.x > canvas.width ) {
                circle.x = 0;
            }
            
        }
        
        /////////////////////////////////////////////////////////////
        // --- NO CODE BELOW HERE  --- DO NOT REMOVE THIS CODE --- //
        /////////////////////////////////////////////////////////////
        
        view.addChild(fps);
        app.addUpdateable(fps);
        
        game.circle = circle;
        game.circles = circles;
        game.drawCircle = drawCircle;
        game.update = update;
        
        app.addUpdateable(window.opspark.game);
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}
