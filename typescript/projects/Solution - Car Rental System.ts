class CarUser {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
  isAvailable: boolean;

  reserve(user: CarUser, rentalDays: number): void;
  extendReservation(user: CarUser, additionalDays: number): void;
  returnCar(user: CarUser): void;
}

class CarRental implements Car {
  id: number;
  make: string;
  model: string;
  year: number;
  isAvailable: boolean;
  reservations: { user: CarUser; rentalDays: number }[];

  constructor(id: number, make: string, model: string, year: number) {
    this.id = id;
    this.make = make;
    this.model = model;
    this.year = year;
    this.isAvailable = true;
    this.reservations = [];
  }

  reserve = (user: CarUser, rentalDays: number): void => {
    if (this.isAvailable) {
      this.isAvailable = false;
      this.reservations.push({ user, rentalDays });
      console.log(
        `Car ${this.id} is now reserved for ${user.name} for ${rentalDays} days.`
      );
    } else {
      console.log(`Car ${this.id} is already reserved.`);
    }
  };

  extendReservation(user: CarUser, additionalDays: number): void {
    if (!this.isAvailable) {
      const reservation = this.reservations.find(
        (reservation) => reservation.user.id === user.id
      );
      if (reservation) {
        reservation.rentalDays += additionalDays;
        console.log(
          `Car ${this.id} reservation has been extended by ${additionalDays} days.`
        );
      } else {
        console.log(
          `Car ${this.id} is not reserved by ${user.name} and cannot be extended.`
        );
      }
    } else {
      console.log(`Car ${this.id} is not reserved.`);
    }
  }

  returnCar(user: CarUser): void {
    if (!this.isAvailable) {
      const reservationIndex = this.reservations.findIndex(
        (reservation) => reservation.user.id === user.id
      );
      if (reservationIndex > -1) {
        this.reservations.splice(reservationIndex, 1);
        this.isAvailable = true;
        console.log(`Car ${this.id} has been returned.`);
      } else {
        console.log(
          `Car ${this.id} is not reserved by ${user.name} and cannot be returned.`
        );
      }
    } else {
      console.log(`Car ${this.id} is not reserved.`);
    }
  }
}
