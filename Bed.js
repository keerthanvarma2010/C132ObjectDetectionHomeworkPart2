Status = ""

function preload() {
    Img = loadImage("dog_cat.jpg")
}

function setup() {
    Canvas = createCanvas(640, 420)
    Canvas.center()
}

function ModelLoaded() {
    Status = true;
    console.log("Model Loaded!")
}

function GotResults(error, results) {
    if (error) {
        console.log(error);
    }

    console.log(results);
}