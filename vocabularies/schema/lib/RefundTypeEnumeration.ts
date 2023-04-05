import { schema } from './namespace';

const values = {
  ExchangeRefund: schema.ExchangeRefund,
  FullRefund: schema.FullRefund,
  StoreCreditRefund: schema.StoreCreditRefund,
};

export type RefundTypeEnumeration = typeof values[keyof typeof values];

export default values;
