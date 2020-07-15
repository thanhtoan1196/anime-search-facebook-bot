Chào các bạn, mình sẽ hướng dẫn làm một con bot có thể tìm Anime dựa theo từ khóa :)

Yêu cầu:
+ Cài NodeJS
+ Có tài khoản Facebook, sau đó điền tài khoản và mật khẩu vào một file tên "config.json"
+ Có một Code Editor ( Không cần thiết nhưng khuyên dùng vì nó hỗ trợ tốt hơn trong coding )




Các bạn tải NodeJS về rồi cài đặt như bình thường :)
Mình đã cài rồi nên sẽ không cài nữa.

Tiếp theo các bạn điền tài khoản Facebook của các bạn vào một file tên là config.json
Mình cũng đã làm nên sẽ không làm nữa (Không muốn bị lộ hehe)

Sau đó các bạn hãy mở command line của thư mục, như sau
Gõ vào là npm i facebook-chat-api
Nó sẽ cài một module tên là facebook-chat-api

Sau đó các bạn gõ vào là node login
Ở dây tài khoản mình có 2FA nên mình sẽ điền mã xác thực vào

Nếu nó hiện logged in là thành công rồi đó :)

Bây giờ chúng ta sẽ mở file tên là bot.js
Chúng ta sẽ bắt đầu code ở phần này. Mục tiêu là khi nhắn "!anime <tên anime>" thì con bot sẽ trả kết quả thông tin về Anime đó.

Mình sẽ dùng API của vuighe cho nó tiện :)

Search: https://vuighe.net/api/v2/search?q= Anime Name
Headers:         
	Referer: "https://vuighe.net/lodoss-tou-senki/tap-1-khoi-dau-huyen-thoai",
        "X-Requested-With": "XMLHttpRequest",

Để xem Vuighe trả kết quả như nào đã.
Các bạn nhập node bot để chạy bot nhé

Nó trả về các thông tin của Anime tìm được, mĩnh sẽ dùng for of để lấy thông tin từng Anime nhé.

Tiếp theo mình sẽ lưu kết quả vào một array, sau đó khi người dùng gọi số thì sẽ lấy kết quả từ index


Đó, chỉ với 85 dòng code bạn đã có được 1 con bot cực hay :), dùng để khoe với bạn bè thì khỏi chê nha.

Vậy thôi, ai không hiểu gì cứ nhăn tin Facebook mình, https://www.facebook.com/HatGaoYT/.

Bye.






#English
Requirements:
+ NodeJS Installed
+ A Facebook account, then fill account and password to a file named "config.js"
+ A Code Editor ( Optional but highly recommended )