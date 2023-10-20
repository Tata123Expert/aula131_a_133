img = "";
modelStatus = "";

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detectando Objetos";
}

function modelLoaded()
{
    console.log("Modelo Carregado!");
    modelStatus = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
    }
}

function preload()
{
    img = loadImage('dog_cat.jpg')
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#fddd23");
    text("Cachorro", 45, 75);
    noFill();
    stroke("#fddd23");
    rect(30, 60, 450, 350);

    fill("#44abff");
    text("Gato", 320, 120);
    noFill();
    stroke("#44abff");
    rect(300, 90, 270, 320);
}












