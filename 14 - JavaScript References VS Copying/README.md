# Day14 - JavaScript References VS Copying

## Note
*	基本資料型態:string,number,boolean,null,undefined......等等，複製時會產生新的物件
*	複合資料型態:array,object......等，複製時會指向同一物件
*	複製Array到新物件方法：
	*	Array.concat()
	*	Array.slice()
	*	Array.from()
	*	利用ES6的[...]語法

*	複製Object到新物件的方法：
	*	Object.assign()  <font color=red>(**※此為淺拷貝，只會複製第一層**)</font>
	*	利用ES6的[...]語法  <font color=red>(**※此為淺拷貝，只會複製第一層**)</font>
	*	JSON.parse(JSON.stringify()) <font color=red>(**※深拷貝**)</font>