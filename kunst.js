$(document).ready(function(){

  let day = true;
  
  $(".night-day-switch").click(function nightDaySwitch() {
    if (day) {
      day = false;
      $(".day").css("background-color", "#e9724c");
      $(".night").css("background-color", "#F2AA92"); 
      nightColorChange();
    } else {
      day = true;
      $(".night").css("background-color", "#e9724c");
      $(".day").css("background-color", "#F2AA92");
      dayColorChange();
    }
  });
  
  function dayColorChange() {
    $(".petal").css("fill", "#fefae0");
    $(".svg-background").css("background-color", "#aed6b0");
    $(".stem").css("stroke", "#283618");
    $(".soil").css("fill", "#aa6122");
    $("rect").css("stroke", "#aed6b0");
    $(".flower-center").css("fill", "#ca802b");
    $("ellipse").css("fill", "#283618");
  }
  
  function nightColorChange() {
    $(".petal").css("fill", "#f3f2ec");
    $(".svg-background").css("background-color", "#647D6C");
    $(".stem").css("stroke", "#262a23");
    $(".soil").css("fill", "#775e55");
    $("rect").css("stroke", "#647D6C");
    $(".flower-center").css("fill", "#8e7567");
    $("ellipse").css("fill", "#262a23");
  }
  
  let canvas = document.getElementById("myCanvas");
  let ctx = canvas.getContext("2d");
  let nextDraw = 0;
  $(".draw-button").click(function makeCanvasArt() {
    if(nextDraw === 0) {
      drawStems();
      nextDraw ++;
    } else if (nextDraw === 1) {
        drawPetals();
        nextDraw ++;
    } else if (nextDraw === 2) {
        drawFlowerCenters();
        nextDraw ++;
    } else if (nextDraw === 3) {
        drawLeaves();
        nextDraw ++;
    } else if (nextDraw === 4){
        drawPot();
        nextDraw ++;
    } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        nextDraw = 0;
  }
});

  function drawPetals() {
    //left flower
    ctx.beginPath();
    ctx.fillStyle = '#fefae0'
    ctx.moveTo(60, 170);
    ctx.arc(40, 170, 20, 0, Math.PI * 2, true);
    ctx.moveTo(80, 140);
    ctx.arc(60, 140, 20, 0, Math.PI * 2, true);
    ctx.moveTo(115, 140);
    ctx.arc(95, 140, 20, 0, Math.PI * 2, true);
    ctx.moveTo(130, 165);
    ctx.arc(110, 165, 20, 0, Math.PI * 2, true);
    ctx.moveTo(118, 193);
    ctx.arc(98, 193, 20, 0, Math.PI * 2, true);
    ctx.moveTo(80, 200);
    ctx.arc(63, 200, 20, 0, Math.PI * 2, true);
    //middle flower
    ctx.moveTo(275, 110);
    ctx.arc(255, 110, 20, 0, Math.PI * 2, true);
    ctx.moveTo(290, 85);
    ctx.arc(270, 85, 20, 0, Math.PI * 2, true);
    ctx.moveTo(320, 80);
    ctx.arc(300, 80, 20, 0, Math.PI * 2, true);
    ctx.moveTo(340, 110);
    ctx.arc(320, 110, 20, 0, Math.PI * 2, true);
    ctx.moveTo(330, 135);
    ctx.arc(310, 135, 20, 0, Math.PI * 2, true);
    ctx.moveTo(295, 135);
    ctx.arc(275, 135, 20, 0, Math.PI * 2, true);
    //right flower
    ctx.moveTo(395, 220);
    ctx.arc(375, 220, 20, 0, Math.PI * 2, true);
    ctx.moveTo(410, 190);
    ctx.arc(390, 190, 20, 0, Math.PI * 2, true);
    ctx.moveTo(445, 195);
    ctx.arc(425, 195, 20, 0, Math.PI * 2, true);
    ctx.moveTo(455, 225);
    ctx.arc(435, 225, 20, 0, Math.PI * 2, true);
    ctx.moveTo(440, 245);
    ctx.arc(420, 245, 20, 0, Math.PI * 2, true);
    ctx.moveTo(415, 245);
    ctx.arc(395, 245, 20, 0, Math.PI * 2, true);
    ctx.fill();
  }

  function drawFlowerCenters() {
    ctx.beginPath();
    ctx.fillStyle = '#ca802b'
    ctx.moveTo(95, 170);
    ctx.arc(75, 170, 20, 0, Math.PI * 2, true);
    ctx.moveTo(310, 110);
    ctx.arc(290, 110, 20, 0, Math.PI * 2, true);
    ctx.moveTo(430, 220);
    ctx.arc(410, 220, 20, 0, Math.PI * 2, true);
    ctx.fill();
  }

  function drawStems() {
    ctx.beginPath();
    ctx.strokeStyle = '#283618';
    ctx.lineWidth = 10;
    ctx.arc(565, 470, 300, Math.PI *1.3, Math.PI, true);
    ctx.moveTo(280, 130);
    ctx.arc(800, 310, 550, Math.PI *1.1, Math.PI * 0.93, true);
    ctx.moveTo(75, 170);
    ctx.arc(-150, 500, 400, Math.PI *1.7, 0, false);
    ctx.stroke();
  }

  function drawLeaves() {
    ctx.beginPath();
    ctx.fillStyle = '#283618';
    ctx.moveTo(250, 395);
    ctx.bezierCurveTo(300, 200, 350, 300, 300, 350)
    ctx.moveTo(200, 370);
    ctx.bezierCurveTo(50, 250, 200, 250, 260, 390)
    ctx.fill();
  }


  function drawPot() {
    ctx.beginPath();
    ctx.fillStyle = '#732E39';
    ctx.moveTo(130, 350);
    ctx.lineTo(380, 350);
    ctx.lineTo(330, 550);
    ctx.lineTo(180,550)
    ctx.fill();
  }

  let openDocumentation = false;
  
  $(".documentation-button").click(function openCloseDocumentation() {
    if(openDocumentation) {
      openDocumentation = false;
      $(".arrow").css("transform","none");
      $(".content").slideToggle();
    } else {
      openDocumentation = true;
      $(".arrow").css("transform","rotate(180deg)");
      $(".content").slideToggle();
    }
  });
});