background_noise = 0;
barking = 0;
meowing = 0;
mooing = 0;
neighing = 0;

function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/vYm8aLPJW/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
    console.log("Model Loaded! :)")
}

function gotResults(error,results){
    if(error)
    {
    console.error(error)
    }
    else
    {
    console.log(results);
    random_number_r= Math.floor(Math.random() * 255) + 1;
    random_number_g= Math.floor(Math.random() * 255) + 1;
    random_number_b= Math.floor(Math.random() * 255) + 1;

    document.getElementById("animal").innerHTML = 'I can hear  - '+ results[0].label;
    document.getElementById("number_of_times").innerHTML = 'Detected Background Noise - '+background_noise+ '<br>Detected Dog - '+barking+ '<br>Detected Cat - '+meowing +'<br>Detected Cow - '+mooing+'<br>Detected Horse - '+neighing;
    document.getElementById("animal").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("number_of_times").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('animal_img');

    if (results[0].label == "Background Noise") {
      img.src = 'background_noise.png';
      background_noise= background_noise+1;
    } else if (results[0].label == "Barking") {
      img.src = 'barking.png';
      barking = barking + 1;
    } else if(results[0].label == "Meowing"){
      img.src = 'meowing.png';
      meowing = meowing + 1;
    }
    else if(results[0].label == "Mooing"){
        img.src = 'mooing.png';
        mooing =mooing+1;
      }
      else if(results[0].label == "Neighing"){
        img.src = 'neighing.png';
        neighing = neighing+1;
      }
      else{
        img.src = 'default_gif.gif';
      }
}
}