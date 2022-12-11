export interface TypeAbsolute {
  top?: number;
  bottom?: number;
  right?: number;
  left?: number;
}

export interface TypeFlex {
  direction?: 'column' | 'row' | 'column-reverse' | 'row-reverse';
  gap?: number;
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
  padding?: number;
  borderBottom?: string;
  cursor?: string;
}

export interface TypeFont {
  margin?: string;
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: number;
  textAlign?: string;
}

export interface TypeBtn {
  color: string;
  backgroundColor: string;
}

export interface TypeCarInfo {
  id: string;
  startDate: string;
  createdAt: string;
  attribute: {
    brand: string;
    name: string;
    segment: string;
    fuelType: string;
    imageUrl: string;
  };
  amount: number;
  insurance: { name: string; description: string }[];
  additionalProducts: { name: string; amount: number }[];
}

export type TypeCarInfos = TypeCarInfo[];

// {
//   "id": 1,
//   "startDate": "2022-12-11T13:52:52.566Z",
//   "createdAt": "2022-12-11T13:52:52.566Z",
//   "attribute": {
//     "brand": "현대",
//     "name": "아반떼 CN7",
//     "segment": "C",
//     "fuelType": "gasoline",
//     "imageUrl": "https://interview.platdev.net/avantecn7.png"
//   },
//   "amount": 600000,
//   "insurance": [
//     {
//       "name": "대인",
//       "description": "무한"
//     },
//     {
//       "name": "대물",
//       "description": "10억"
//     }
//   ],
//   "additionalProducts": [
//     {
//       "name": "하이파킹 주차권",
//       "amount": 150000
//     }
//   ]
// },
