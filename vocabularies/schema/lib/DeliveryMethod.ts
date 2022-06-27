import { schema } from './namespace';

const values = {
  LockerDelivery: schema.LockerDelivery,
  OnSitePickup: schema.OnSitePickup,
  ParcelService: schema.ParcelService,
};

export type DeliveryMethod = typeof values[keyof typeof values];

export default values;
