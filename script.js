$(document).ready(function() {

    // 鼠標懸停時更改歌曲鏈接背景色
    $("ol li a").hover(
        function() {
            $(this).css("background-color", "#ffdd57");
        },
        function() {
            $(this).css("background-color", "");
        }
    );

    // 檢測滾動位置顯示回到頂部按鈕
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $("#back-to-top").fadeIn();
        } else {
            $("#back-to-top").fadeOut();
        }
    });

    // 點擊回到頂部按鈕
    $("#back-to-top").click(function() {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

    /// 點擊播放按鈕隨機播放其中一首歌曲
    $(".play-first-song").click(function() {
        // 找到該歌手的所有歌曲鏈接
        var songLinks = $(this).closest("tr").find("ol li a");
        // 隨機選取一首歌曲
        var randomSongLink = songLinks.eq(Math.floor(Math.random() * songLinks.length)).attr("href");
        // 在新分頁打開隨機選中的歌曲鏈接
        window.open(randomSongLink, '_blank');
    });

    // 點擊 "全部播放" 按鈕依次播放所有歌曲
    $(".play-all-songs").click(function() {
        var songLinks = $(this).closest("tr").find("ol li a");
        var index = 0;
        
        function playNextSong() {
            if (index < songLinks.length) {
                window.open(songLinks.eq(index).attr("href"), '_blank');
                index++;
                setTimeout(playNextSong, 3000); // 設定間隔，3000為 3 秒，可調整
            }
        }
        playNextSong();
    });

    // 點擊隨機播放歌單按鈕
    $("#play-random-song").click(function() {
        var allSongs = $("ol li a");
        var randomSong = allSongs.eq(Math.floor(Math.random() * allSongs.length)).attr("href");
        window.open(randomSong, '_blank');
    });


});
