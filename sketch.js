var rect1, rect2, rect3;

function setup() {
    createCanvas(800, 400);
    rect1 = createSprite(400, 200, 50, 50);
    rect1.shapeColor = "blue";
    rect2 = createSprite(200, 100, 50, 50);
    rect2.shapeColor = "red";
    rect3 = createSprite(400, 300, 40, 40);
    rect3.shapeColor = "green";
}

function draw() {
    background(255, 255, 255);
    rect2.x = mouseX;
    rect2.y = mouseY;

    if (isTouching(rect2, rect3)) {
        rect2.shapeColor = "green";
        rect3.shapeColor = "violet";
    } else {
        rect2.shapeColor = "red";
        rect3.shapeColor = "green";
    }
    //  if (isTouching(rect1, rect2)) {
    //     rect2.shapeColor = "green";
    //     rect1.shapeColor = "violet";
    // } else {
    //     rect2.shapeColor = "red";
    //     rect1.shapeColor = "green";
    // }


    drawSprites();
}

function isTouching(rect1, rect2) {
    if (rect2.x - rect1.x < rect2.width / 2 + rect1.width / 2 &&
        rect1.x - rect2.x < rect1.width / 2 + rect2.width / 2 &&
        rect2.y - rect1.y < rect2.height / 2 + rect1.height / 2 &&
        rect1.y - rect2.y < rect1.height / 2 + rect2.height / 2) {

        return true;

    } else {

        return false;
    }
}