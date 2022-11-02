import client from './CustomAxios';

class CarService {
  getCarList() {
    return client.get();
  }
}

export default new CarService();
