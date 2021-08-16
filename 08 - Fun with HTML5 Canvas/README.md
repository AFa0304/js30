# 08 - Fun with HTML5 Canvas

## Note
* 線條控制：
	* lineCap:控制線條結尾樣式(butt,round,square)
	* lineJoin:控制線條間接合處樣式(round,bevel,miter)
* 用e.offsetX, e.offsetY記錄鼠標位置
* 監聽mouseup外，還需監聽mouseout把isDrawing設為false，以免鼠標超出畫面後沒mousedown仍繼續繪圖