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

    // Register click listener
    this.btnSearch.onclick = () => {
      this.carResult();
      this.run();
    };

    carResult = () => {
      let cars = "";
      let resultHtml = "";

      component.list
        .filter((car) => car.available)
        .forEach((car, index) => {
          cars += car.render();

          // Jika sudah mencapai tiga mobil atau merupakan mobil terakhir dalam daftar, tambahkan baris baru
          if ((index + 1) % 3 === 0 || index === component.list.length - 1) {
            resultHtml += `<div class="row">${cars}</div>`;
            cars = "";
          }
        });

      this.carElementResult.innerHTML = resultHtml;
    };

    run = () => {
      let dateTime = new Date(`${this.date.value} ${this.wktJemput.value}`);
      let cars = "";
      let driverType = this.drivertype.value === "true";

      const filteredCars = component.list.filter(
        (car) =>
          car.available === driverType &&
          new Date(car.availableAt).getTime() === dateTime.getTime() &&
          car.capacity >= parseInt(this.jumlahPenumpang.value)
      );

      if (parseInt(this.jumlahPenumpang.value) === 0) {
        this.carElementResult.innerHTML = "";
        return;
      }

      const getCarLength = filteredCars.map((car) => {
        cars += car.render();
        this.carElementResult.innerHTML = cars;
      });

      console.log(getCarLength.length);
    };
  }

  async load() {
    const cars = await Binar.listCars();
    component.init(cars);
  }
}
