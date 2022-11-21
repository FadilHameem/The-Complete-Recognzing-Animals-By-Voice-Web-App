function startRecognizing(){
    navigator.mediaDevices.getUserMedia({ audio : true});
   classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/mw11_7hLA/model.json', modelReady);   
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.log(error);
    } else {
        console.log(results);
        r = Math.floor(Math.random() * 255) + 1;
        g = Math.floor(Math.random() * 255) + 1;
        b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("final_result").innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById("data_anaylsis").innerHTML = 'Accuracy - ' + (results[0].confidence*100).toFixed(2) + "%";
        document.getElementById("final_result").style.color = "rgb("+r+","+g+","+b+")";
        document.getElementById("data_anaylsis").style.color = "rgb("+r+","+g+","+b+")";

        image = document.getElementById("result_image");

        if(results[0].label == "Barking"){
            image.src = "Dog.gif";
        }else if(results[0].label == "Meowing"){
            image.src = "Cat.jpg";
        }else if(results[0].label == "Roaring"){
            image.src = "Lion.gif";
        }else if(results[0].label == "Mooing"){
            image.src = "Cow.jpg";
        }else{
            image.src = "Background.jpg";
        }
    }}
