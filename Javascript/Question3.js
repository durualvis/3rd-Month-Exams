class Cuboid {
  constructor(lenght, width, height) {
    this.lenght = lenght;
    this.width = width;
    this.height = height;
  }
  getVolume() {
    return this.lenght * this.width * this.height;
  }
  getDimension() {
    return [this.lenght, this.width, this.height];
  }
}

const cuboid = new Cuboid(10, 2, 3);
console.log(cuboid.getVolume());
console.log(cuboid.getDimension());
