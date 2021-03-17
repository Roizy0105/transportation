let d = new Date();
//get the curernt time
let time = d.getHours();

//if it's night display the night photo if it's day display the morning photo
if (time > 20 && time < 7)
{
    document.getElementById("body_index").style.backgroundImage = 'url("img/NYC.jpg")';
}
else
{
   document.getElementById("body_index").style.backgroundImage = 'url("img/nyc_morning.jpg")';
}