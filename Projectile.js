class Projectile {
  constructor(target) {
    this.Xpos = 225; // center of the middle square (205 + 20 because square is 40x40)
    this.Ypos = 225;
    this.target = target;
    this.speed = 5;

    // Calculate direction towards target
    let dx = target.getXpos() - this.x;
    let dy = target.getYpos() - this.y;
    let mag = Math.sqrt(dx * dx + dy * dy);
    this.vx = (dx / mag) * this.speed;
    this.vy = (dy / mag) * this.speed;
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;
  }

  display() {
    fill(0, 0, 255);
    circle(this.x, this.y, 8);
  }

  hits(enemy) {
    let d = dist(this.x, this.y, enemy.getXpos(), enemy.getYpos());
    return d < 15; // adjust depending on size
  }
}
