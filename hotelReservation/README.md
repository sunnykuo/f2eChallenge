# Hotel Reservation

## Functional map
* Homepage
	* list all room types and can click any room to enter the detail page

* Detailpage
	* view all informations about the room
		* ex: room description、price、checkIn and checkOut time、other services
	* 可以用日曆方式，瀏覽未來 90 天已預約與尚未預約的時段
	* 在選擇預約日期時，會即時顯示訂房價格總價
	* 可以線上訂房，需填寫的欄位有姓名、電話、預約起迄
	* 只能預約未來 90 天內的時段
	* 若預約失敗，會回傳訊息讓客戶知曉，失敗原因項目如下:
		* 預訂 90 天後
		* 預約時間已被人預訂
		* 您預約的是過去時間，例如昨天

## Demo
* [Demo](https://sunnykuo.github.io/f2eChallenge/hotelReservation/#/)

## Step
* npm install
* npm run start
	* Runs the app in the development mode. Open http://localhost:9000 to view it in the browser.
* npm run build
	* Builds the app for production to the build folder.

## Use Tech
* React js
* Redux
* Webpack
* Sass
* Bootstrap
* Flickity
* Moment.js