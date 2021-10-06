/** draw the logo symbol */

var canvas = document.getElementById('symbol')
var ctx = canvas.getContext('2d')
ctx.fillStyle = '#fff'
const width = 55
const height = 67

ctx.fillRect(120, 0, width, height)
ctx.fillRect(120, 85, width, height)
ctx.fillRect(30, 40, width, height)
ctx.fillRect(210, 40, width, height)