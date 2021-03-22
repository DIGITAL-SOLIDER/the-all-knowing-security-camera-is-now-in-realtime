function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier("MobileNet",lodedThing);
}

function draw()
{
  image(video,0,0,300,300);
  classifier.classify(video,getPalakPaneer);
}

function lodedThing()
{
  console.log("i hate fruits");
}

function getPalakPaneer(error,result)
{
  if(error)
  {
    console.log(error);
  }else
  {
    console.log(result);
    document.getElementById("object_result_thingy").innerHTML = result[0].label;
    document.getElementById("acurracy_stuff_answer").innerHTML = result[0].confidence.toFixed(3);
  }
}

