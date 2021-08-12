# Day06 - Type Ahead

## Note
* 正規式的使用:
 * 在正規式中加入變數： new RegExp(`${variable}`)
 * 使用正規式每三位加入逗號：string.replace(/\B(?=(?:\d{3})+(?!\d))/g, ',')
*使用fetch取得json內容