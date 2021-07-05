<h1><b>Nasa App</b></h1>

Presentation - https://dmitryzhuravskiy.github.io/nasa-app/ ;
<br /><br />

<h2><b>Startup Guide</b></h2>
<b>1.</b> git clone https://github.com/DmitryZhuravskiy/nasa-app.git <i>- copy the repository;</i><br />
<b>2.</b> cd ./nasa-app <i>- go to the folder with the local version;</i><br />
<b>3.</b> npm install <i>- install dependencies;</i><br />
<b>4.</b> npm start <i>- to view the local version in the browser at http://localhost:3000/ ;</i><br />
<b>5.</b> <i>или</i> npm run build <i>to build the project;</i><br />
<br /><br />
<h2><b>Description of the project</b></h2>

Requests for nasa.api - Astronomy Picture of the Day (APOD). 3 different requests are processed separately on each page: a request for one post, by default for a specific date, however, the date can be changed to any available day, a request for 4 randomly selected posts, and a request for a range of posts selected over a certain period. The time elapsed after the first loading of the default parameters can be changed. Also on the page for the selection of posts over a period there is pagination with the output of 5 posts per page. The background is made with pure CSS using @keyframes animation. The background tries to resemble a starry sky with blue stars. Requests are made using the useEffect hook.

<img src="https://github.com/DmitryZhuravskiy/nasa-app/raw/master/public/images/nasa--1.jpg "/>
<h3><b>Start page</b></h3>
<br /><br /><br /><br /><br />
<img src="https://github.com/DmitryZhuravskiy/nasa-app/raw/master/public/images/nasa--2.jpg "/>
<h3><b>Page to display one selected post</b></h3>
<br /><br /><br /><br /><br />
<img src="https://github.com/DmitryZhuravskiy/nasa-app/raw/master/public/images/nasa--3.jpg "/>
<h3><b>Post selection page with selectable selection from the top...</b></h3>
<br /><br /><br /><br /><br />
<img src="https://github.com/DmitryZhuravskiy/nasa-app/raw/master/public/images/nasa--4.jpg "/>
<h3><b>... and at the end with a selection form and page pagination</b></h3>
<br />

