song_1 = "";
song_2 = "";

function preload()
{
    song = loadSound("m1.mp3");
    song = loadSound("m2.mp3");
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.position(300,200);

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video ,0 ,0, 600, 500);
}