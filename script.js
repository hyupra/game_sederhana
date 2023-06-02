document.addEventListener("DOMContentLoaded", function(event) {
    var player = document.getElementById("player");
    var target = document.getElementById("target");
  
    var containerWidth = document.getElementById("game-container").offsetWidth;
    var containerHeight = document.getElementById("game-container").offsetHeight;
  
    var playerX = 0;
    var playerY = 0;
  
    var targetX = Math.floor(Math.random() * (containerWidth - 50));
    var targetY = Math.floor(Math.random() * (containerHeight - 50));
  
    player.style.left = playerX + "px";
    player.style.top = playerY + "px";
  
    target.style.left = targetX + "px";
    target.style.top = targetY + "px";
  
    document.addEventListener("keydown", function(event) {
      var step = 10;
      var keyPressed = event.keyCode;
  
      if (keyPressed === 37 && playerX > 0) {
        playerX -= step; // Bergerak ke kiri
      }
  
      if (keyPressed === 38 && playerY > 0) {
        playerY -= step; // Bergerak ke atas
      }
  
      if (keyPressed === 39 && playerX < containerWidth - 50) {
        playerX += step; // Bergerak ke kanan
      }
  
      if (keyPressed === 40 && playerY < containerHeight - 50) {
        playerY += step; // Bergerak ke bawah
      }
  
      player.style.left = playerX + "px";
      player.style.top = playerY + "px";
  
      // Deteksi tabrakan
      if (
        playerX < targetX + 50 &&
        playerX + 50 > targetX &&
        playerY < targetY + 50 &&
        playerY + 50 > targetY
      ) {
        alert("Selamat! Anda berhasil menang!");
        resetGame();
      }
    });
  
    function resetGame() {
      playerX = 0;
      playerY = 0;
  
      targetX = Math.floor(Math.random() * (containerWidth - 50));
      targetY = Math.floor(Math.random() * (containerHeight - 50));
  
      player.style.left = playerX + "px";
      player.style.top = playerY + "px";
  
      target.style.left = targetX + "px";
      target.style.top = targetY + "px";
    }
  });
  