$(function() {
    $(window).bottom({proximity: 0.05});
    $(window).on('bottom', function() {
        // コンテンツ表示の処理を記述
                show_number ++; // 表示数

                }
            )});

                show_number = 50; // 表示数
                for (i = 0; i < show_number; i++)
                {
                if (tumblr_api_read.posts[i]["type"]=="photo"){
                insta= tumblr_api_read["posts"][i]["photo-url-400"];
                _insta= tumblr_api_read["posts"][i]["photo-url-500"];
                url = tumblr_api_read["posts"][i]["url"];
                date = tumblr_api_read["posts"][i]["date"];
                document.write('<div class="photo">','<div class="date_light">',date, '</br>','</div >','<a href="',_insta, '"rel="lightbox[instagram]"title="Taken from Instagram"target="_blank"><img src="',insta,'"width="200" height="200"></a>','</div>');
                };
                if (tumblr_api_read.posts[i]["type"]=="video"){
                video= tumblr_api_read["posts"][i]["video-player"];
                url = tumblr_api_read["posts"][i]["url"]
                date = tumblr_api_read["posts"][i]["date"];
                document.write('<div class="box">','<div class="date_light">',date, '</br>','</div >','<a href="',url, '" target="_blank">',video,'</a>','</div>');
                };



                }

                </script>
                     <script type="text/javascript" src="http://no-wa-ke-daily.tumblr.com/api/read/json?num=50&start=50?0008"></script>
                <script type="text/javascript">
$(function() {
    $(window).bottom({proximity: 0.05});
    $(window).on('bottom', function() {
        // コンテンツ表示の処理を記述
                show_number ++; // 表示数

                }
            )});

                show_number = 50; // 表示数
                for (i = 0; i < show_number; i++)
                {
                if (tumblr_api_read.posts[i]["type"]=="photo"){
                insta= tumblr_api_read["posts"][i]["photo-url-400"];
                _insta= tumblr_api_read["posts"][i]["photo-url-500"];
                url = tumblr_api_read["posts"][i]["url"];
                date = tumblr_api_read["posts"][i]["date"];
                document.write('<div class="photo">','<div class="date_light">',date, '</br>','</div >','<a href="',_insta, '"rel="lightbox[instagram]"title="Taken from Instagram"target="_blank"><img src="',insta,'"width="200" height="200"></a>','</div>');
                };
                if (tumblr_api_read.posts[i]["type"]=="video"){
                video= tumblr_api_read["posts"][i]["video-player"];
                url = tumblr_api_read["posts"][i]["url"]
                date = tumblr_api_read["posts"][i]["date"];
                document.write('<div class="box">','<div class="date_light">',date, '</br>','</div >','<a href="',url, '" target="_blank">',video,'</a>','</div>');
                };



                }

                </script>
