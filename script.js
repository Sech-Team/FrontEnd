const snowContainer = document.querySelector('.snow');

// Hàm tạo bông tuyết
function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.textContent = '❄';
  
  // Vị trí và kích thước ngẫu nhiên
  snowflake.style.left = Math.random() * 100 + 'vw';
  snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
  snowflake.style.animationDuration = Math.random() * 5 + 5 + 's';
  snowflake.style.opacity = Math.random();

  snowContainer.appendChild(snowflake);

  // Xóa bông tuyết sau khi rơi
  setTimeout(() => {
    snowflake.remove();
  }, 10000);
}

// Tạo bông tuyết mới mỗi 200ms
setInterval(createSnowflake, 200);
