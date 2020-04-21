function Resize(clicked_id){
	if(document.getElementById(clicked_id.className).width == "600" && document.getElementById(clicked_id.className).height == "400"){
	  document.getElementById(clicked_id.className).width = "1000";
	  document.getElementById(clicked_id.className).height = "600";
	  clicked_id.value = "Large";
	}
	else if(document.getElementById(clicked_id.className).width == "1000" && document.getElementById(clicked_id.className).height == "600"){
	  document.getElementById(clicked_id.className).width = "1500";
	  document.getElementById(clicked_id.className).height = "800";
	  clicked_id.value = "Small";
	}
	else if(document.getElementById(clicked_id.className).width == "1500" && document.getElementById(clicked_id.className).height == "800"){
	  document.getElementById(clicked_id.className).width = "600";
	document.getElementById(clicked_id.className).height = "400";
	clicked_id.value = "Medium";
	}
	else{
	document.getElementById(clicked_id.className).width = "600";
	document.getElementById(clicked_id.className).height = "400";
	}
  }
var images = [	"images/I-1.jpg","images/I-2.jpg","images/I-3.jpg","images/I-4.jpg","images/I-5.jpg","images/I-6.jpg","images/I-7.jpg","images/I-8.jpg","images/I-9.jpg","images/I-10.jpg","images/I-11.jpg","images/I-12.jpg",
"images/I-13.jpg","images/I-14.jpg","images/I-15.jpg","images/I-16.jpg","images/I-17.jpg","images/I-18.jpg","images/I-19.jpg","images/I-20.jpg","images/I-21.jpg","images/I-22.jpg","images/I-23.jpg","images/I-23.jpg","images/I-24.jpg","images/I-25.jpg","images/I-26.jpg","images/I-27.jpg","images/I-28.jpg","images/I-29.jpg","images/I-30.jpg"];


function load_images()
{
document.getElementById("imagesviajs").innerHTML = '';
for (var i = 0; i < images.length; i++) 
{
document.getElementById("imagesviajs").innerHTML += `                <div class="box">
<img id="${i+1}" src="${ images[i] }" width="500" height="300">
<div class="middle">
  <div class="buttonclick">
	<input class="${i+1}" onclick="Resize(this)" type="button" value="Change Size">
	<button class="button" name="Up" value="Up" onclick="up(${i})">Before</button>
		<button class="button" name="Down" value="Down" onclick="down(${i})">After</button>
	<button class="button" name="top" onclick="topfunction(${i})">top</button>
	<button class="button" name="bottom" onclick="bottom(${i})">bottom</button>
  </div>

</div>
</div>`; 
}
}



function up(index) //3
{
let temp = images[index];

var back_index = index - 1;
if(back_index >=0){
images[index] = images[back_index]; 
images[back_index] = temp;
load_images();
}


}


function down(index)
{
let temp = images[index];

var back_index = index + 1;
if(back_index <= images.length-1){
images[index] = images[back_index]; 
images[back_index] = temp;
load_images();
}
}
function topfunction(index)
{
let temp = images[index];
var i=0,flag;
for(i=0;i<=index;i++){
flag = images[i];
images[i] = temp;
temp = flag;
}
load_images();
}

function bottom(index)
{
var i,flag;
for(i=index;i<images.length-1;i++){
flag = images[i];
images[i] = images[i+1];
images[i+1] = flag;
}
load_images();
}

