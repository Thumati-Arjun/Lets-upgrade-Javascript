// Qn:1   
// Create a webpage containing an image and 3 buttons
// on click of the second button, change the existing image to the second image
// on click of the third button change it once again
// on clickof the first button first image should comeback 
function ChangeImage1(){
    const ele1 = document.getElementById("image");
    const newurl1 = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg";
     ele1.src = newurl1;
}
function ChangeImage2(){
    const ele2 = document.getElementById("image");
    const newurl2 = "https://cdn.pixabay.com/photo/2014/04/17/23/26/environmental-protection-326923__340.jpg";
     ele2.src = newurl2;
}
function ChangeImage3(){
    const ele3 = document.getElementById("image");
    const newurl3 = "https://www.wallpaperflare.com/static/137/175/824/beach-blue-sky-calm-dawn-wallpaper-preview.jpg";
     ele3.src = newurl3;
}     

// Qn:2
// Create a webpage containing 2 input flds and a button
// i) Write something in the frst input
// ii) On click of the button, the content should copies to the second input
function CopyText() {
    var text1 = document.getElementById("txt1").value;
    document.getElementById("txt2").value = text1;
}

// Qn:3
// Create an array of objects, with objects having the follwing property
// i) {name(string), age{no}, Country(string), Hobbies(array(string[]))}
// ii) Write a function to display all the objects on the console
let bio = [
    {
      "name": "XYZ",
      "age": 20,
      "country": "India",
      "Hobbies" : ["Painting", "Cycling"] 
    },
    {
        "name": "ZZZ",
        "age": 40,
        "country": "Italy",
        "Hobbies" : ["Playing","Sketching"]
    },
    {
        "name": "XXX",
        "age": 30,
        "country": "India",
        "Hobbies" : ["Travelling","Hand-crafts"]
    },
  ]
  for (let i= 0; i<bio.length; i++){
      console.log(bio[i]);
  }    

// Qn:4
// Following 3rd qn.
// i) Write a function to display all the objects having age lessthan 30
// ii) Write a function to display all the objects having country India
for (let i= 0; i<bio.length; i++){
    while(bio[i].age < 30){
        console.log("Age less than 30",bio[i]);
        break
    }
}    

bio.forEach(function(b) {
    while (b.country == "India") {
        console.log("Indians: ",b);
        break
    }
        
});
