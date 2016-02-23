# OpenFin How To: Launch an External Process
In this example we will launch an executable called 'pdftohtml.exe', a command-line tool which, as its name suggest, coverts a pdf to html. It requires you pass it at least two arguments - a pdf file to convert and an output path for the converted files. It is an OpenSource tool which may be found here [http://pdftohtml.sourceforge.net/](http://pdftohtml.sourceforge.net/).

The 'pdftohtml.exe' file is stored in a .zip fle in the 'assets' directory. All assets must be zipped - they will be unzipped on installation of the OpenFin app. The app will be installed at C:\Users\[USER_NAME]\AppData\Local\OpenFin\apps\[ID_NUMBER]. This is the default directory to all OpenFin apps.


This is a vanilla JavaScript app, free from frameworks and build systems.
 
It has a simple Node/Express server for local development.

Clone the repo and run

```
$ npm install
```
NB: on a Mac you may need to type 'sudo npm install'

Navigate to the root folder where 'server.js' resides with your command line tool and run:

```
$ node server
```

This should start a simple Node server at [http://localhost:9966](http://localhost:9966), then, click the link below to install as an openFin app.

If you wish to change to localhost port you will need to change the references in "server.js", "app.json" and in the installer link below.

[installer](https://dl.openfin.co/services/download?fileName=openfin_demo_externalprocess&config=http://localhost:9966/app.json)