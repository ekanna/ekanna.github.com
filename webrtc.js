navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia ||
													navigator.mozGetUserMedia || navigator.msGetUserMedia;

window.URL = window.URL || window.webkitURL;

function mediaStream (localMediaStream) { 
	var video = document.createElement("video");
	video.autoplay = true;
	video.src = window.URL.createObjectURL(localMediaStream);
	document.body.appendChild(video);
}

function errorHandle(err){
	console.log(err)
}

navigator.getUserMedia({video: true, audio: true}, mediaStream, errorHandle);
