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

function initWithOpenFin(){
    // Your OpenFin specific code to go here...
    document.querySelector('#files-pdf').addEventListener('change', handleFileSelect, false);
}

function initNoOpenFin(){
    alert("OpenFin is not available - you are probably running in a browser.");
}


function handleFileSelect(evt) {

    var fs = window.requestFileSystem();
    console.log(fs)

    if (window.File && window.FileReader && window.FileList && window.Blob) {
        // Great success! All the File APIs are supported.
    } else {
        alert('The File APIs are not fully supported in this browser.');
    }

    var files = evt.target.files; // FileList object
    console.log(evt);
    // files is a FileList of File objects. List some properties.
    var output = [];
    for (var i = 0, f; f = files[i]; i++) {
        output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
            f.size, ' bytes, last modified: ',
            f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a',
            '</li>');
    }
    document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
}

