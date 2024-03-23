const timeScale = 15;

function shiftLeft(ctx, px) {
  const { width, height } = ctx.canvas;
  const imageData = ctx.getImageData(px, 0, width - px, height);
  ctx.putImageData(imageData, 0, 0);
  ctx.clearRect(width - px, 0, px, height);
}

export function addPoint(canvas, prevPrice, price) {
  const ctx = canvas.getContext("2d");
  const { width, height } = canvas;

  const y = height / 2 - price.value;
  const prevY = height / 2 - prevPrice.value;

  let prevX = prevPrice.ticks * timeScale + 4;
  let x = price.ticks * timeScale;

  // Scroll the chart if the point is out of view
  if (x + 4 > width) {
    shiftLeft(ctx, timeScale);
    x = width - timeScale;
    prevX = x - 11;
  }

  // Determine the color based on price change
  const color = prevPrice.value > price.value ? "red" : prevPrice.value < price.value ? "green" : "black";
  
  ctx.fillStyle = color;
  ctx.strokeStyle = color;

  // Draw the line connecting previous and current points
  ctx.beginPath();
  ctx.moveTo(prevX, prevY);
  ctx.lineTo(x, y);
  ctx.stroke();

  // Draw the current point
  ctx.beginPath();
  ctx.arc(x, y, 4, 0, Math.PI * 2);
  ctx.fill();
}
