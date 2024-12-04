const rainContainer = document.querySelector('.rain');

// Hàm tạo giọt mưa
function createRaindrop() {
  const raindrop = document.createElement('div');
  raindrop.classList.add('raindrop');

  // Vị trí ngẫu nhiên
  raindrop.style.left = Math.random() * 100 + 'vw';

  // Tốc độ và chiều cao ngẫu nhiên
  raindrop.style.height = Math.random() * 20 + 10 + 'px';
  raindrop.style.animationDuration = Math.random() * 2 + 1 + 's';

  rainContainer.appendChild(raindrop);

  // Xóa giọt mưa sau khi rơi
  setTimeout(() => {
    raindrop.remove();
  }, 3000);
}

// Tạo giọt mưa mới mỗi 100ms
setInterval(createRaindrop, 100);
