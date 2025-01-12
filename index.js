const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

// game size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Boundary {
  static width = 40;
  static height = 40;
  static color = "blue";

  constructor({ position }) {
    this.position = position;
  }

  draw() {
    c.fillStyle = Boundary.color;
    c.fillRect(
      this.position.x,
      this.position.y,
      Boundary.width,
      Boundary.height
    );
  }
}

const map = [
  ["-", "-", "-", "-", "-", "-"],
  ["-", " ", " ", " ", " ", "-"],
  ["-", " ", "-", "-", " ", "-"],
  ["-", "", " ", " ", " ", "-"],
  ["-", "-", "-", "-", "-", "-"],
];

const boundaries = [];

map.forEach((row, i) => {
  row.forEach((symbol, j) => {
    switch (symbol) {
      case "-":
        boundaries.push(
          new Boundary({
            position: {
              x: Boundary.width * j,
              y: Boundary.height * i,
            },
          })
        );
        break;
    }
  });
});

boundaries.forEach((boundary) => {
  boundary.draw();
});
