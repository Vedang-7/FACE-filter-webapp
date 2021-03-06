function preload(){
}
function setup(){
   canvas= createCanvas(350, 400);
   canvas.center();
   video= createCapture(VIDEO);
   video.size(425, 550);
   video.hide();

   poseNet=ml5.poseNet(video, modelLoaded);
   poseNet.on('pose', gotposes);
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
        console.log("nose x="+results[0].pose.nose.x);
        console.log("nose y="+results[0].pose.nose.y);
    }    
}
function modelLoaded(){
    console.log('poseNet is initialized');
}
function draw(){
    image(video, 0, 0, 425, 550);
}
function take_snapshot(){
    save('my_filter_image.png');
}