//إنشاء Class للمركبات وتعريف خصائصها مثل ( الاسم، الشركة المصنعة، ID).
class Vehicle {
    constructor(name, manufacturer, id) {
      this.name = name;
      this.manufacturer = manufacturer;
      this.id = id;
    }
  }
  
  // إنشاء Class للسيّارة بحيث يرث من Class المركبات مع تعريف خصائص السيارة (نوع السيّارة gas or electric..).
  class Car extends Vehicle {
    constructor(name, manufacturer, id, carType) {
      super(name, manufacturer, id);
      this.carType = carType;
    }
  }
  
  //إنشاء Class للطيّارة بحيث يرث من Class المركبات مع تعريف خصائص الطائرة (نوع الطائرة..).
  class Airplane extends Vehicle {
    constructor(name, manufacturer, id, airplaneType) {
      super(name, manufacturer, id);
      this.airplaneType = airplaneType;
    }
  }
  
  // إنشاء Class بالاسم employee لتمثيل الموظفين وتعريف خصائصه مثل (الاسم، ID, date of birth).
  class Employee {
    constructor(name, id, dateOfBirth) {
      this.name = name;
      this.id = id;
      this.dateOfBirth = dateOfBirth;
    }
  }
  
  
  // إنشاء Class سائق بحيث يرث من Class الموظفين مع تعريف خصائص السائق الإضافية مثل licenseID.
  class Driver extends Employee {
    constructor(name, id, dateOfBirth, licenseID) {
      super(name, id, dateOfBirth);
      this.licenseID = licenseID;
    }
  }
  
  // إنشاء Class طيّار بحيث يرث من Class الموظفين مع تعريف خصائص الطيّار الإضافية مثل licenseID.
  class Pilot extends Employee {
    constructor(name, id, dateOfBirth, licenseID) {
      super(name, id, dateOfBirth);
      this.licenseID = licenseID;
    }
  }
  
  // نشاء Class الحجز بحيث يحتوي على السائق والمركبة الخاصة به مثل ( reservationDate, employeeId , vehiclesId ,reservationID).
  class Reservation {
    constructor(reservationDate, employeeId, vehicleId, reservationID) {
      this.reservationDate = reservationDate;
      this.employeeId = employeeId;
      this.vehicleId = vehicleId;
      this.reservationID = reservationID;
    }
  }
  
  // إنشاء objects لثلاثة سيّارات وطائرتين
  const firstCar = new Car("Electric Sports Car", "Porsche", 1, "electric");
  const seconedCar = new Car("Hybrid SUV", "Lexus", 2, "gas");
  const thirdCar = new Car("Electric Hatchback", "Tesla", 3, "electric");
  
  const firstAirplane = new Airplane("Airbus A380", "Airbus", 4, "Commercial");
  const SeconedAirplane = new Airplane("Embraer E195", "Embraer", 5, "Regional");
  
  //موظفين للاختبار  
  const firsEmployee = new Employee("Ghadah", 11137, "6-10-2001", 1);
  const seconedEmployee = new Employee("Jojo", 11144, "20-11-2001", 2);
  // إنشاء مصفوفة لحفظ الحجوزات
  const reservations = [];
  
  // دالة لفحص التوافق بين موظف ومركبة وإضافة الحجز إذا كانت الشروط تنطبق
  function makeReservation(employeeId, vehicleId) {
    const employee = employees.find(emp => emp.id === employeeId);
    const vehicle = vehicles.find(veh => veh.id === vehicleId);
  
    if (employee instanceof Pilot && vehicle instanceof Car) {
      console.log("المركبة سيارة والموظف طيار!");
    } else if (employee instanceof Pilot && vehicle instanceof Airplane) {
      const reservation = new Reservation(new Date(), employeeId, vehicleId, reservations.length + 1);
      reservations.push(reservation);
      console.log("تم");
    } else {
      console.log("الموظف والمركبة غير متوافقين.");
    }
  }
  
  // عمل حجز
  makeReservation(2, 2);
  
  // طباعة محتوى المصفوفة باستخدام دالة map
  const reservationDetails = reservations.map(reservation => {
    return {
      reservationID: reservation.reservationID,
      employeeName: employees.find(emp => emp.id === reservation.employeeId).name,
      vehicleName: vehicles.find(veh => veh.id === reservation.vehicleId).name,
      reservationDate: reservation.reservationDate.toLocaleDateString()
    };
  });
  
  console.log(reservationDetails);