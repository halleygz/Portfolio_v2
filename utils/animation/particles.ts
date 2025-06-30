export class Circle {
  x: number;
  y: number;
  velX: number;
  velY: number;
  radius: number;
  color: string;

  constructor(
    x: number,
    y: number,
    radius: number,
    color: string,
    velX: number,
    velY: number
  ) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velX = velX;
    this.velY = velY;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }

  update(canvasWidth: number, canvasHeight: number) {
    this.x += this.velX;
    this.y += this.velY;

    if (this.x - this.radius < 0 || this.x + this.radius > canvasWidth) {
      this.velX *= -1;
      this.x = Math.max(
        this.radius,
        Math.min(this.x, canvasWidth - this.radius)
      );
    }

    if (this.y - this.radius < 0 || this.y + this.radius > canvasHeight) {
      this.velY *= -1;
      this.y = Math.max(
        this.radius,
        Math.min(this.y, canvasHeight - this.radius)
      );
    }
  }
}
