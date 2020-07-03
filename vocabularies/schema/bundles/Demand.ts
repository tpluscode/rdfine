import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../Intangible';
import { DemandMixin } from '../Demand';
import { LoanOrCreditMixin } from '../LoanOrCredit';
import { QuantitativeValueMixin } from '../QuantitativeValue';
import { AdministrativeAreaMixin } from '../AdministrativeArea';
import { GeoShapeMixin } from '../GeoShape';
import { PlaceMixin } from '../Place';
import { PriceSpecificationMixin } from '../PriceSpecification';
import { TypeAndQuantityNodeMixin } from '../TypeAndQuantityNode';
import { AggregateOfferMixin } from '../AggregateOffer';
import { CreativeWorkMixin } from '../CreativeWork';
import { EventMixin } from '../Event';
import { MenuItemMixin } from '../MenuItem';
import { ProductMixin } from '../Product';
import { ServiceMixin } from '../Service';
import { TripMixin } from '../Trip';
import { OrganizationMixin } from '../Organization';
import { PersonMixin } from '../Person';
import { WarrantyPromiseMixin } from '../WarrantyPromise';

export const DemandBundle = [
  IntangibleMixin as Mixin,
  DemandMixin as Mixin,
  LoanOrCreditMixin as Mixin,
  QuantitativeValueMixin as Mixin,
  AdministrativeAreaMixin as Mixin,
  GeoShapeMixin as Mixin,
  PlaceMixin as Mixin,
  PriceSpecificationMixin as Mixin,
  TypeAndQuantityNodeMixin as Mixin,
  AggregateOfferMixin as Mixin,
  CreativeWorkMixin as Mixin,
  EventMixin as Mixin,
  MenuItemMixin as Mixin,
  ProductMixin as Mixin,
  ServiceMixin as Mixin,
  TripMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin,
  WarrantyPromiseMixin as Mixin];
