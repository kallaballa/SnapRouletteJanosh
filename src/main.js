import '../node_modules/babelify/node_modules/babel-core/browser-polyfill.js';

import API from 'janosh.js';
import config from './config';

var janosh = new API(config.socketUri);
//import JpegCameraSwf from 'jpeg-camera-es6/lib/jpeg_camera.swf';
//import 'script-loader!jpeg-camera-es6/lib/swfobject.min.js';
import '../node_modules/jpeg-camera/dist/canvas-to-blob.min.js';

import JpegCamera from 'jpeg-camera-es6';

function ArrayBufferToString(buffer) {
    return BinaryToString(String.fromCharCode.apply(null, Array.prototype.slice.apply(new Uint8Array(buffer))));
}

function BinaryToString(binary) {
    var error;

    try {
        return decodeURIComponent(escape(binary));
    } catch (_error) {
        error = _error;
        if (error instanceof URIError) {
            return binary;
        } else {
            throw error;
        }
    }
}

// we seem to need DOMContentLoaded here, because script tags,
// including our mustache templates aren't necessarily loaded
// on document.load().
document.addEventListener('DOMContentLoaded', ev => {
  // either HTML5 or Flash are available
let theWebcam = null;
let theContainer = document.getElementById('camera')
let page = 0
var jc = new JpegCamera(theContainer, {
    onInit: (webcam) => {
      // here you can do some initialisation if required.
      // save the module reference so we can call it
      theWebcam = webcam;
    },
    onReady: (specs) => {  },
    onError: (err) => { /* do something when there's an error */ },
    onDebug: (debug) => { console.log(debug); },
    shutter: false,
    mirror: false,
    previewMirror: false,
  });
 
  var snapbutton = document.getElementById('snapbtn');

  snapbutton.onclick = function(ev) {
  	var snapshot = theWebcam.capture();
	snapshot.getBlob(function(blob) {
		var reader = new FileReader();
		reader.addEventListener("loadend", function() {
 			// reader.result contains the contents of blob as a typed array
			var body = document.getElementById("body");
			var mainCanvas = document.createElement("canvas");
          		mainCanvas.width = 200;
                        mainCanvas.height = 200;
			var ctx = mainCanvas.getContext("2d");
			var strBlob = ArrayBufferToString(reader.result);
			var img = new Image();
			img.onload = function () {
				ctx.drawImage(img, 0, 0,200,200);
	                        janosh.publish("submit","W",mainCanvas.toDataURL("image/jpeg"));
			}
			img.src = "data:image/jpeg;base64,"+ btoa(strBlob);
		});
		reader.readAsArrayBuffer(blob);
	})
  };

  function makeImage(base64) {
        var element = document.getElementById("images");
        while (element.firstChild) {
                element.removeChild(element.firstChild);
        }

	var element = document.getElementById("images");
        var div = document.createElement("div");
        div.style="display: inline;";
        var img = document.createElement("img");
        var button = document.createElement("button");
        button.innerHTML="X";
        button.style="display: block;";
        div.appendChild(img);
        img.src=base64;
        img.style="width:200px; height:200px;";
        element.appendChild(div);
  };
  
  janosh.subscribe("notify", (value) => {
  })

  janosh.onReceive((value) => {
	if(value == "cheat")
		alert("Please don't cheat. Submit proper snapshots");
	else
		makeImage(value);
  });

  janosh.onError((error) => {
  });
});
