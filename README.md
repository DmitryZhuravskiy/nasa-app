<h1><b>Nasa App</b></h1>

Презентационная версия - https://dmitryzhuravskiy.github.io/nasa-app/ ;
<br /><br />

<h2><b>Руководство по запуску</b></h2>
<b>1.</b> git clone https://github.com/DmitryZhuravskiy/nasa-app.git <i>- копируем репозиторий;</i><br />
<b>2.</b> cd ./nasa-app <i>- переходим в папку с локальной версией;</i><br />
<b>3.</b> npm install <i>- устанавливаем зависимости;</i><br />
<b>4.</b> npm start <i>- для просмотра локальной версии в браузере по адресу http://localhost:3000/ ;</i><br />
<b>5.</b> <i>или</i> npm run build <i>для сборки проекта;</i><br />
<br /><br />
<h2><b>Описание проекта</b></h2>

Запросы на nasa.api - Astronomy Picture of the Day (APOD). Отрабатываются 3 разных запроса отдельно на каждой странице: запрос на один пост, по умолчанию на конкретную дату, однако, дату можно изменить на любой доступный день, запрос на 4 случайно выбранных поста и запрос на диапазон постов, выбираемых за определенных промежуток времени. Промежуток времени после первой загрузки заданных параметров по умолчанию можно изменить. Также на странице выборке постов за промежуток времени есть пагинация с выводом по 5 постов на страницу.
Фон сделан на чистом CSS с использованием анимации @keyframes. Фон старается походить на звездное небо с отдающим синим звездами. Запросы осуществляются с помощью хука useEffect.

<img src="https://github.com/DmitryZhuravskiy/nasa-app/raw/master/public/images/nasa--1.jpg "/>
<b>Стартовая страница</b>
<br /><br /><br /><br /><br />
<img src="https://github.com/DmitryZhuravskiy/nasa-app/raw/master/public/images/nasa--2.jpg "/>
<b>Страница для отображения одного выбранного поста</b>
<br /><br /><br /><br /><br />
<img src="https://github.com/DmitryZhuravskiy/nasa-app/raw/master/public/images/nasa--3.jpg "/>
<b>Страница выбора постов с задаваемой выборкой сверху...</b>
<br /><br /><br /><br /><br />
<img src="https://github.com/DmitryZhuravskiy/nasa-app/raw/master/public/images/nasa--4.jpg "/>
<b>... и в конце с формой выбора и пагинацией страниц</b>
<br />

