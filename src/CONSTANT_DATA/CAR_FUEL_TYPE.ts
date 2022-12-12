interface TypeCAR_FUEL_TYPE {
  [key: string]: string;
  gasoline: '가솔린';
  ev: '전기';
  hybrid: '하이브리드';
}

const CAR_FUEL_TYPE: TypeCAR_FUEL_TYPE = {
  gasoline: '가솔린',
  ev: '전기',
  hybrid: '하이브리드',
};

export default CAR_FUEL_TYPE;
