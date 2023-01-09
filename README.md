# Image Uploader
 
This project is a image uploader application, created with ReactJS for the client and NodeJS for the API.
This main purpose of this project is to create an image(files in a near future) uploader. It's a kind of substitute of known services such as [Google Photos](https://www.google.com/intl/es/photos/about/) or [iCloud](https://www.icloud.com/), where you can upload your own images from your computer or mobile from anywhere without taking care of how much space you have left.

### Application Usage

#### You can drag and drop or just simply upload from your local folder the images

![ezgif-1-562f301e5f](https://user-images.githubusercontent.com/64290438/211402172-1ce57600-c0c1-4c46-b720-0cbafdd1ea9c.gif)

<img src="https://user-images.githubusercontent.com/64290438/211343805-e87c9963-9cd8-4b7c-a0b6-574293b39df8.png" width="600">

#### Loading after upload an image
![image](https://user-images.githubusercontent.com/64290438/211343400-256a2b59-98d0-4ab8-9e29-f215af66de8a.png)

#### Finally, you can see your image uploaded and also can copy to clipboard the url

## Development Environment (Local)

### System Requirements

:bulb: Before you begin, make sure you have the following installed:

- [Node.js v16 or above](https://nodejs.org/en/download/)
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git/)

The installation of the project is pretty much like any other Node base project. First of all clone the repository and install the dependences:
```bash
        git clone git@github.com:jfiora/my-own-drive.git
        cd ./my-own-drive
        npm install
```

For the client we have to run these commands:
```bash
        cd ./client
        npm install
        npm run dev
  ```
    
And for the server:
```bash
        cd ./server
        npm install
        npm start
 ```
    
 ## Live site
 
Personally, I would recommend deploy the client site on a free platform such as [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/).

In my own case, I have the application server running on my own home server(in order to serve the API, I strongly recommend [ngrok](https://ngrok.com/)) and the client up and running on vercel. I'm not sharing the url because I use it as a substitute of iCloud and I don't like to share any information of mine.

## Technologies used
<p float="left">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1039px-Vitejs-logo.svg.png" width="100">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" width="100">
    <img src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png" width="100">
    <img src="https://zustand-demo.pmnd.rs/favicon.ico" width="100">
</p>

This project is based on Image Uploader from Full-stack challenges series of [devchallenges.io](devchallenges.io). You can see the original from [here](https://devchallenges.io/challenges/O2iGT9yBd6xZBrOcVirx).

