# 11 - Custom Video Player

## Note
* video的屬性&method複習
	* Methods:
		* play() →開始
		* pause() →暫停
	
	* Properties:
		* video.paused →是否暫停
		* video.volume →音量
		* video.playbackRate →速率
		* video.currentTime →當前播放時間
		* video.duration →影片長度

* 使用addEventListener("timeupdate")來監聽video的時間變化
* document.querySelectorAll("[data-skip]")來取得所有具有data-skip的DOM