Webcam.set({
    width:350,
    height:400,
    image_format : 'png' ,
    png_quality:90
});

camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot()
{
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML= '<img id="captured_image" src="'+data_uri+'"/>';
});
}

console.log('ml5 version:', ml5.version);
classifer=m15.imageClassifer('https://teachablemachine.withgoogle.com/models/eCc8rm0lo/model.json',modelLoaded);
function modelLoaded(){
console.log('Model Loaded!');
}

function speak(){
   var synth= window.speechSynthesis;
   speak_data_1="The prediction is" + prediction_1;
   
   var utte
   synth.sperThis= new SpeechSynthesisUtterance(speak_data_1+speak_data_2);ak(utterThis);
}