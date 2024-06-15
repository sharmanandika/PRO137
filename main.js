function bedroom(){
    window.location='bedroom_index.html'; 
}

function water_bottle(){
    window.location='WaterBottle_index.html';
}

function TV(){
    window.location='TV_index.html';
}

function Desk(){
    window.location='Desk_index.html';
}

function IPhone(){
    window.location='Phone_index.html'
}
 
img="";
status1="";
objects=[];

function setup(){
    canva= createCanvas(640,420);
    canva.center();
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="status:detectingobject";
}

function modelLoaded(){
    console.log("model is loaded");
    status_1=true;
    objectDetector.detect(img,gotresults);
}

function gotresults(){
    if (error)
    {
console.log(error);
    }
    console.log(results)
    objects=results;
}

function draw(){
    if(status1 !=""){
    for (i=0; 1<objects.length;i++){
        document.getElementById("status").innerHTML="status:objectdetcted";
         fill("FF0000");
        percent=floor(objects[i].label+""+percent+"%",objects[i].x, objects[i].y);
        nofill();
        stroke("FF0000");
        rect(objects[i].x, objects[i].y,objects[i].width, objects[i].height);
    }
}
}




