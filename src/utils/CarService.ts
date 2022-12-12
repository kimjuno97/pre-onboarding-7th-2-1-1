import client from './CustomAxios';

class CarService {
  getCarList() {
    return client.get('/cars');
  }
}

export default new CarService();
