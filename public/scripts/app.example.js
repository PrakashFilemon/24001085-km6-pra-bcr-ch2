class Car {
  constructor() {
    this.carElementResult = document.getElementById("root-value");
    this.btnSearch = document.getElementById("btn-search");
    this.drivertype = document.getElementById("tipe-driver");
    this.date = document.getElementById("tanggal");
    this.wktJemput = document.getElementById("waktu-jemput");
    this.jumlahPenumpang = document.getElementById("jmlh-penumpang");
  }

  async init() {
    await this.load();

    this.btnSearch.onclick = this.run.bind(this);
  }

  carResult() {
    let cars = "";
    component.list
      .filter((car) => car.available)
      .forEach((car) => {
        cars += car.render();
      });
    this.carElementResult.innerHTML = cars;
  }

  run() {
    let dateTime = new Date(`${this.date.value} ${this.wktJemput.value}`);
    let cars = "";
    let driverType = this.drivertype.value === "true";
    const getCarLength = component.list
      .filter(
        (car) =>
          car.available === driverType &&
          new Date(car.availableAt) >= dateTime &&
          car.capacity >= this.jumlahPenumpang.value
      )
      .map((car) => {
        cars += car.render();
        this.carElementResult.innerHTML = cars;
      });
    console.log(getCarLength.length);

    if (parseInt(this.jumlahPenumpang.value) === 0) {
      this.carElementResult.innerHTML = "";
      return;
    }
  }

  async load() {
    const cars = await Binar.listCars();
    component.init(cars);
  }
}
