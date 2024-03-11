class component {
  static list = [];

  static init(cars) {
    this.list = cars.map((car) => new this(car));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `<div class="col-md-4">
              <div class="card"  >
                <img src="${this.image}" class="card-img-top" alt="..." />
                <div class="card-body">
                    <p class="card-title">${this.manufacture}</p>
                    <h4>Rp. ${this.rentPerDay} / hari</h4>
                    <p class="card-text">${this.description}</p>
                    <p><img src="icons/fi_users.png" />${this.capacity} Orang</p>
                    <p><img src="icons/fi_settings.png" />${this.transmission}</p>
                    <p><img src="icons/fi_calendar.png" />${this.year}</p>
                    <a href="#" class="btn btn-success">Pilih Mobil</a>
          </div>
        </div>
      </div>`;
  }
}
