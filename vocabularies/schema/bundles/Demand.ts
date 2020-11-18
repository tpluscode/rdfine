import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../lib/Intangible';
import { DemandMixin } from '../lib/Demand';
import { LoanOrCreditMixin } from '../lib/LoanOrCredit';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';
import { AdministrativeAreaMixin } from '../lib/AdministrativeArea';
import { GeoShapeMixin } from '../lib/GeoShape';
import { PlaceMixin } from '../lib/Place';
import { PriceSpecificationMixin } from '../lib/PriceSpecification';
import { TypeAndQuantityNodeMixin } from '../lib/TypeAndQuantityNode';
import { AggregateOfferMixin } from '../lib/AggregateOffer';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { EventMixin } from '../lib/Event';
import { MenuItemMixin } from '../lib/MenuItem';
import { ProductMixin } from '../lib/Product';
import { ServiceMixin } from '../lib/Service';
import { TripMixin } from '../lib/Trip';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';
import { WarrantyPromiseMixin } from '../lib/WarrantyPromise';

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
