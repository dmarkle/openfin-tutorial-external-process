document.addEventListener("DOMContentLoaded", function(){
    init();
});

function init(){
    console.log("Dom Loaded ", this);
    try{
        fin.desktop.main(function(){
            initWithOpenFin();
        })
    }catch(err){
        initNoOpenFin();
    }
};

var _pdfPath = "", _outputPath = "", inputpdfDisplay, outputHtmlDisplay


function initWithOpenFin(){
    // Your OpenFin specific code to go here...
    document.querySelector('#launch-no-args').addEventListener('click', launchExtWithNoAruments);
    document.querySelector('#launch-with-args').addEventListener('click', launchExtWithAruments);
    document.querySelector('#path').addEventListener('change', onPathChanged);
    inputpdfDisplay = document.querySelector("#input-pdf");
    outputHtmlDisplay = document.querySelector("#output-html");
}

function initNoOpenFin(){
    alert("OpenFin is not available - you are probably running in a browser.");
}

function onPathChanged(evt){

    var _pathString = String(evt.target.value);
    _pdfPath = '"'+_pathString.split("\\").join("\\\\")+'"';
    // get rid of the name if the pdf file
    var _trimmedOutput = _pathString.split("\\");
    var pdfName = _trimmedOutput.pop();
    _trimmedOutput.push("html_output");
    _outputPath = '"'+String(_trimmedOutput.join("\\\\"))+'"';

    inputpdfDisplay.innerHTML = _pdfPath;
    outputHtmlDisplay.innerHTML = _outputPath;
}

/* When 'fin.desktop.System.launchExternalProcess' is called,
if no arguments are passed then the arguments
(if any) are taken from the 'args' parameter
of the 'appAssets' Object with the relevant 'alias'.
 */
function launchExtWithNoAruments(){
    fin.desktop.System.launchExternalProcess({
        alias: 'pdftohtml-alias',
        listener: function(event){
            // react to close event
            if(event.topic === "exited" && event.exitCode === MY_KNOWN_BAD_STATE) {
                // your desired logic here
                console.log("Excited External Process");
            }else{
                console.log("Running External Process");
            }
        }
    });
}

/*
If 'arguments' is passed as a parameter they take precedence over any 'args' set in the 'app.json'.
 */

function launchExtWithAruments(){
    fin.desktop.System.launchExternalProcess({
        alias: 'pdftohtml-alias',
        arguments: _pdfPath+" "+_outputPath,
        listener: function(event){
            // react to close event
            if(event.topic === "exited" && event.exitCode === MY_KNOWN_BAD_STATE) {
                // your desired logic here
                console.log("Excited External Process");
            }else{
                console.log("Running External Process");
            }
        }
    });
}


