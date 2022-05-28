sainik = "";
god = "";

function setup() {
canvas = createCanvas(650, 385);
canvas.center();

video = createCapture(VIDEO);
video.hide();
}

function preload() {
    sainik = loadSound("gulab.mp3");
    god = loadSound("jamun.mp3");

}


function draw() {
    image(video, 0, 0, 650, 385);
}
