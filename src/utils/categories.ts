import { IProducts } from "../screens/Home";

export interface ICategories {
  id: string;
  name: string;
  products: IProducts[];
}

export const categories = [
  {
    id: '1',
    name: "Moletons",
    products: [
      {
        id: '1',
        name: 'Moletom A',
        price: '400,00'
      },
      {
        id: '2',
        name: 'Moletom B',
        price: '3000,00'
      },
      {
        id: '3',
        name: 'Moletom C',
        price: '440,00'
      },
      {
        id: '4',
        name: 'Moletom D',
        price: '510,00'
      }
    ]
  }
]