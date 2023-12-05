function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(500, 300);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
}

function draw() {
    background('#96A97');
}

function modelLoaded () {
    console.log('PoseNet is initialised!');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}

