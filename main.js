music = "";

function preload() {
    music = loadSound("music.mp3");
}

leftWrist_x = 0;
leftWrist_y = 0;

rightWrist_x = 0;
rightWrist_y = 0;


function setup() {
    canvas = createCanvas(600, 400);
    canvas.position(375, 150);
    
    video = createCapture(VIDEO);
    video.hide();

 poseNet = ml5.poseNet(video, modelLoaded);
 poseNet.on('pose', gotPoses);
}   

function draw() {
    image(video, 0, 0, 600, 400);
}

function play() {
    music.play();

    music.rate(1);
    music.setVolume(1);
}


function modelLoaded() {
console.log('Model has been loaded');
}

function gotPoses(results) {
    if (results.length > 0) {
        leftWrist_x = results[0].pose.leftWrist.x;
        leftWrist_y = results[0].pose.leftWrist.y;

        rightWrist_x = results[0].pose.rightWrist.x;
        rightWrist_y = results[0].pose.rightWrist.y;
        
        console.log(results);
        console.log("Left wrist X = " + leftWrist_x + "and Right wrist X = " + rightWrist_x);
        console.log("Left wrist Y = " + leftWrist_y + "and Right wrist Y = " + rightWrist_y);
    }
    }
    