var canvas=new fabric.Canvas('canvas1')
var player_x=20
var Player_y=20
var block_width=30
var block_height=30
var player_details=""
var block_details=""
function player_update(){
    fabric.Image.fromURL('player.png',function (img){
        player_details=img;
        player_details.scaleToWidth(150);
        player_details.scaleToHeight(140);
        player_details.set({
            top:Player_y,
            left:player_x
        });
        canvas.add(player_details);
    });
}
 function block_update(imagenumber){
    fabric.Image.fromURL(imagenumber,function (img){
        block_details=img;
        block_details.scaleToWidth(block_width);
        block_details.scaleToHeight(block_height);
        block_details.set({
            top:Player_y,
            left:player_x
         });
         canvas.add(block_details);
    });
 }
 var keypress_store=""
 window.addEventListener('keydown',uppress);
    function uppress(e){
        keypress_store=e.keyCode;
        console.log(keypress_store)
        if (keypress_store=='37'){
            left()
            console.log('left')
        }
        if (keypress_store=='38'){
            up()
            console.log('up')
        }
        if (keypress_store=='39'){
            right()
            console.log('right')
        }
        if (keypress_store=='40'){
            down()
            console.log('down')
        }
        if (keypress_store=='65'){
            console.log('a')
            block_update('cloud.jpg')
        }
        if (keypress_store=='66'){
            console.log('b')
            block_update('dark_green.png')
        }
        if (keypress_store=='67'){
            console.log('c')
            block_update('roof.jpg')
        }
        if (keypress_store=='68'){
            console.log('d')
            block_update('trunk.jpg')
        }
        if (keypress_store=='69'){
            console.log('e')
            block_update('unique.png')
        }
        if (keypress_store=='70'){
            console.log('f')
            block_update('wall.jpg')
        }
        if (keypress_store=='71'){
            console.log('g')
            block_update('yellow_wall.png')
        }
        if (keypress_store=='72'){
            console.log('h')
            block_update('light_green.png')
        }
        if (keypress_store=='73'){
            console.log('i')
            block_update('ground.png')
        }
        if (keypress_store=="80" && e.shiftKey==true && block_width<100 && block_height<100){
            block_width+=10
            block_height+=10
            document.getElementById('width').innerHTML=block_width
            document.getElementById('height').innerHTML=block_height
            console.log('P&shift pressed together')
        }
        if (keypress_store=="77" && e.shiftKey==true && block_height>10 && block_width>10){
            block_width-=10
            block_height-=10
            document.getElementById('width').innerHTML=block_width
            document.getElementById('height').innerHTML=block_height
            console.log('M&shift pressed together')
        }
    }
function left(){
    if (player_x>0){
player_x-=block_width;
canvas.remove(player_details);
        player_update();
        console.log("player_x="+player_x,"Player_y="+Player_y);
    }
}
function right(){
    if (player_x<850){
player_x+=block_width;
canvas.remove(player_details);
        player_update();
        console.log("player_x="+player_x,"Player_y="+Player_y);
    }
}
function up(){
    if (Player_y>0){
Player_y-=block_height;
canvas.remove(player_details);
        player_update();
        console.log("player_x="+player_x,"Player_y="+Player_y);
    }
}
function down(){
    if (Player_y<560){
Player_y+=block_height;
canvas.remove(player_details);
        player_update();
        console.log("player_x="+player_x,"Player_y="+Player_y);
    }
}
    