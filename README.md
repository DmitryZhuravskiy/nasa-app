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

Запросы на nasa.api - Astronomy Picture of the Day (APOD). Отрабатываются 3 разных запроса отдельно на каждой странице: запрос на один пост, по умолчанию на конкретную дату, однако, дату можно изменить на любой доступный день, запрос на 4 случайно выбранных поста и запрос на диапазон постов, выбираемых за определенных промежуток времени. Промежуток времени после первой загрузки заданных параметров по умолчанию можно изменить. Также на странице выборке постов за промежуток времени есть пагинация с выводом по 5 постов на страницу.
Фон сделан на чистом CSS с использованием анимации @keyframes. Фон старается походить на звездное небо с отдающим синим звездами. Запросы осуществляются с помощью хука useEffect.

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

