export type PaymentInfoProps = {
  number: string;
  flag: string;
  img: string;
  purchaseDate: string;
};

export type GameItemProps = {
  img: string;
  title: string;
  price: number;
  downloadLink?: string;
  paymentInfo?: PaymentInfoProps;
};
