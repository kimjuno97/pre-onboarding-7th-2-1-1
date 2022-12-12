import CAR_SIZE_TYPE from './CAR_SIZE_TYPE';

interface TypeCAR_TYPE_SEGMENT {
  [key: string]: string;
  C: '소형';
  D: '중형';
  E: '대형';
  SUV: 'SUV';
}

const CAR_TYPE_SEGMENT: TypeCAR_TYPE_SEGMENT = {
  C: CAR_SIZE_TYPE.SMALL_SIZE,
  D: CAR_SIZE_TYPE.MIDDLE_SIZE,
  E: CAR_SIZE_TYPE.BIG_SIZE,
  SUV: CAR_SIZE_TYPE.SUV,
};

export default CAR_TYPE_SEGMENT;
