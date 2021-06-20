import { NamedNode } from '@rdfjs/types';
import { schema } from './namespace';

export default {
  LockerDelivery: schema.LockerDelivery as NamedNode<'http://schema.org/LockerDelivery'>,
  OnSitePickup: schema.OnSitePickup as NamedNode<'http://schema.org/OnSitePickup'>,
  ParcelService: schema.ParcelService as NamedNode<'http://schema.org/ParcelService'>,
};

export type DeliveryMethod =
  NamedNode<'http://schema.org/LockerDelivery'>
  | NamedNode<'http://schema.org/OnSitePickup'>
  | NamedNode<'http://schema.org/ParcelService'>;
