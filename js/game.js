/*
渲染上下文创建画布
*/
var canvas = document.createElement("canvas");
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);  //添加canvas节点

/*
准备图片
*/
var bgReady = false;