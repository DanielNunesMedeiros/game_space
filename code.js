

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["7169cdd4-d6c4-4490-885b-a50fdb8b2623","161e9b51-bba9-4bd4-9023-80d5ccb197c9","a5e0bb6d-e445-437e-9933-a4f47b86bf84","54c3be31-baab-4db4-84ef-0487deac04d5","12089563-2caa-40a5-8167-894291ce20ea","651922be-ae2b-4170-854a-f7f08b01452b","203791f5-8cdc-42c4-b623-b8ef15411978","f6e374e5-1814-497a-8c84-c34120f74374","9ded681f-2738-4d2b-8e49-5e6f4bcbd299","6ecfeff4-2e56-49ac-9baf-739444624f85","4235cb7d-5cbf-4020-b7a5-3ff7ba25faee","9ff7eb8d-0801-4a04-96fc-83c24a9b1a10","43014d95-5900-4c08-a3e5-6327d51f48da"],"propsByKey":{"7169cdd4-d6c4-4490-885b-a50fdb8b2623":{"name":"spacebattle_07_1","sourceUrl":"assets/api/v1/animation-library/gamelab/oe91580NRX_lq0_AXmFgzqY7HFhJ5gkQ/category_retro/spacebattle_07.png","frameSize":{"x":380,"y":398},"frameCount":1,"looping":true,"frameDelay":2,"version":"oe91580NRX_lq0_AXmFgzqY7HFhJ5gkQ","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":380,"y":398},"rootRelativePath":"assets/api/v1/animation-library/gamelab/oe91580NRX_lq0_AXmFgzqY7HFhJ5gkQ/category_retro/spacebattle_07.png"},"161e9b51-bba9-4bd4-9023-80d5ccb197c9":{"name":"retroship_13_1","sourceUrl":"assets/api/v1/animation-library/gamelab/Ne_Exd13wIXMaZMlMRodwiIjvSGER29Q/category_retro/retroship_13.png","frameSize":{"x":392,"y":392},"frameCount":1,"looping":true,"frameDelay":2,"version":"Ne_Exd13wIXMaZMlMRodwiIjvSGER29Q","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":392,"y":392},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Ne_Exd13wIXMaZMlMRodwiIjvSGER29Q/category_retro/retroship_13.png"},"a5e0bb6d-e445-437e-9933-a4f47b86bf84":{"name":"retroship_12_1","sourceUrl":"assets/api/v1/animation-library/gamelab/gcZWNcMX5xnMb9.sFAr7M7ntYsq_g.yA/category_retro/retroship_12.png","frameSize":{"x":392,"y":392},"frameCount":1,"looping":true,"frameDelay":2,"version":"gcZWNcMX5xnMb9.sFAr7M7ntYsq_g.yA","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":392,"y":392},"rootRelativePath":"assets/api/v1/animation-library/gamelab/gcZWNcMX5xnMb9.sFAr7M7ntYsq_g.yA/category_retro/retroship_12.png"},"54c3be31-baab-4db4-84ef-0487deac04d5":{"name":"space_1","sourceUrl":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png"},"12089563-2caa-40a5-8167-894291ce20ea":{"name":"santa_1","sourceUrl":"assets/api/v1/animation-library/gamelab/9ZleRnJkMxYhfpPY2zZrrikGdZ6H6F6l/category_backgrounds/background_santa.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"9ZleRnJkMxYhfpPY2zZrrikGdZ6H6F6l","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/9ZleRnJkMxYhfpPY2zZrrikGdZ6H6F6l/category_backgrounds/background_santa.png"},"651922be-ae2b-4170-854a-f7f08b01452b":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":900,"y":900},"frameCount":1,"looping":true,"frameDelay":12,"version":"ebNozOFjWs5ZLXEnEFX.gSjWzJWhoVWi","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":900,"y":900},"rootRelativePath":"assets/651922be-ae2b-4170-854a-f7f08b01452b.png"},"203791f5-8cdc-42c4-b623-b8ef15411978":{"name":"animation_2","sourceUrl":null,"frameSize":{"x":900,"y":900},"frameCount":1,"looping":true,"frameDelay":10,"version":"Qtuq.v7K6R5V_k9WbsAQUSzrK6VcOYgm","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":900,"y":900},"rootRelativePath":"assets/203791f5-8cdc-42c4-b623-b8ef15411978.png"},"f6e374e5-1814-497a-8c84-c34120f74374":{"name":"score_4","sourceUrl":null,"frameSize":{"x":70,"y":38},"frameCount":1,"looping":true,"frameDelay":12,"version":"7Vw5NUwoVVqi849KNKQ2VKC4B.tUTl6b","loadedFromSource":true,"saved":true,"sourceSize":{"x":70,"y":38},"rootRelativePath":"assets/f6e374e5-1814-497a-8c84-c34120f74374.png"},"9ded681f-2738-4d2b-8e49-5e6f4bcbd299":{"name":"score_3","sourceUrl":null,"frameSize":{"x":70,"y":38},"frameCount":1,"looping":true,"frameDelay":12,"version":"fbCvBKf3F3tB1ifEC8j14iTFsJF3q9a0","loadedFromSource":true,"saved":true,"sourceSize":{"x":70,"y":38},"rootRelativePath":"assets/9ded681f-2738-4d2b-8e49-5e6f4bcbd299.png"},"6ecfeff4-2e56-49ac-9baf-739444624f85":{"name":"score_2","sourceUrl":null,"frameSize":{"x":70,"y":38},"frameCount":1,"looping":true,"frameDelay":12,"version":"1GO_VObdZlx.8w2ArH4r5.MsoxMN4apg","loadedFromSource":true,"saved":true,"sourceSize":{"x":70,"y":38},"rootRelativePath":"assets/6ecfeff4-2e56-49ac-9baf-739444624f85.png"},"4235cb7d-5cbf-4020-b7a5-3ff7ba25faee":{"name":"score_1","sourceUrl":null,"frameSize":{"x":70,"y":38},"frameCount":1,"looping":true,"frameDelay":12,"version":"bUHE_.n1kB3fhVT8pPGbnF3kCJVMCKNC","loadedFromSource":true,"saved":true,"sourceSize":{"x":70,"y":38},"rootRelativePath":"assets/4235cb7d-5cbf-4020-b7a5-3ff7ba25faee.png"},"9ff7eb8d-0801-4a04-96fc-83c24a9b1a10":{"name":"score_0","sourceUrl":null,"frameSize":{"x":70,"y":38},"frameCount":1,"looping":true,"frameDelay":12,"version":"WElU2P8X0a7xzsRBuyE_RUpis7Z63AOv","loadedFromSource":true,"saved":true,"sourceSize":{"x":70,"y":38},"rootRelativePath":"assets/9ff7eb8d-0801-4a04-96fc-83c24a9b1a10.png"},"43014d95-5900-4c08-a3e5-6327d51f48da":{"name":"points","sourceUrl":null,"frameSize":{"x":9,"y":9},"frameCount":1,"looping":true,"frameDelay":12,"version":"1A6ONhMrdwOnCKD3qRKyjDi01mKoXMY2","loadedFromSource":true,"saved":true,"sourceSize":{"x":9,"y":9},"rootRelativePath":"assets/43014d95-5900-4c08-a3e5-6327d51f48da.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var fundo1 = createSprite(200,200);
fundo1.setAnimation("space_1");
var fundo2 = createSprite(600,200);
fundo2.setAnimation("space_1");
var nave = createSprite(100,200);
nave.setAnimation("spacebattle_07_1");
nave.scale = 0.15;
nave.setCollider("rectangle");
var enemy = createSprite(450,randomNumber(50,350));
enemy.setAnimation("retroship_13_1");
enemy.scale = 0.15;
enemy.velocityX = -7.5;
enemy.setCollider("circle");
var enemy2 = createSprite(550,randomNumber(50,350));
enemy2.setAnimation("retroship_12_1");
enemy2.scale = 0.15;
enemy2.velocityX = -7.5;
enemy2.setCollider("circle");
var score = createSprite(62,55);
score.setAnimation("score_0");
score.scale = 1.1;
var x = 1;
draw();
console.log("Nave: up, down, right, left");

function draw(){
  
  fundoDef();
  
  enemy.rotation = randomNumber(-5,5);
  enemy2.rotation = randomNumber(-5,5);

  naveMovement();
  
  enemysVelocity();
  
  gameoverFunc();
  
  scoreFunc();
  
  scene();
  
  limite();
  
  drawSprites();
}

function fundoDef(){
  fundo1.velocityX = -3;
  fundo2.velocityX = -3;
  
  if(fundo1.x < -200){
    fundo1.x = 600;
  }
  if(fundo2.x < -200){
    fundo2.x = 600;  
  }
}

function naveMovement(){
  if(keyDown("up")){
   nave.y = nave.y - 7; 
  }
  if(keyDown("down")){
   nave.y = nave.y + 7; 
  }
  if(keyDown("left")){
   nave.x = nave.x - 7; 
  }
  if(keyDown("right")){
   nave.x = nave.x + 7; 
  }
}

function enemysVelocity(){
  if(enemy.x < 0){
    fundo1.velocityX = fundo1.velocityX - 3;
    fundo2.velocityX = fundo2.velocityX - 3;
    enemy.velocityX = enemy.velocityX - 0.5;
    enemy.x = 450;
    enemy.y = randomNumber(50,450);
  }
  if(enemy2.x < 0){
    fundo1.velocityX = fundo1.velocityX - 3;
    fundo2.velocityX = fundo2.velocityX - 3;
    enemy2.velocityX = enemy2.velocityX - 0.5;
    enemy2.x = 550;
    enemy2.y = randomNumber(50,350);
  }
}

function scoreFunc(){
  if(World.seconds == (10 + x)){
    score.setAnimation("score_1");
  }
  if(World.seconds == (18 + x)){
    score.setAnimation("score_2");
  }
  if(World.seconds == (26+ x)){
    score.setAnimation("score_3");
    fundo1.setAnimation("santa_1");
    fundo2.setAnimation("santa_1");
  }
  if(World.seconds == (30 + x)){
    score.setAnimation("score_4");
  }
}

function gameoverFunc(){
  if(nave.isTouching(enemy)){
    enemy.velocityX = 0;
    enemy.rotation = 0;
    enemy2.velocityX = 0;
    enemy2.rotation = 0;
    var gameover = createSprite(200,200);
    gameover.setAnimation("animation_1");
    gameover.scale = 0.5;
  }
  if(nave.isTouching(enemy2)){
    enemy.velocityX = 0;
    enemy.rotation = 0;
    enemy2.velocityX = 0;
    enemy2.rotation = 0;
    var gameover2 = createSprite(200,200);
    gameover2.setAnimation("animation_1");
    gameover2.scale = 0.5;
  }
}

function scene(){
  if(World.seconds == (60 + x)){
    fundo1.x = 200;
    fundo2.x = 600;
    fundo1.setAnimation("animation_2");
    fundo1.scale = 0.5;
  }
}

function limite(){
  if(nave.x < 25){
    nave.x = 25;
  }
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
