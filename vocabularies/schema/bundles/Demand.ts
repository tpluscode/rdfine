import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../lib/Intangible';
import { DemandMixin } from '../lib/Demand';
import { LoanOrCreditMixin } from '../lib/LoanOrCredit';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';
import { PlaceMixin } from '../lib/Place';
import { AdministrativeAreaMixin } from '../lib/AdministrativeArea';
import { GeoShapeMixin } from '../lib/GeoShape';
import { PriceSpecificationMixin } from '../lib/PriceSpecification';
import { TypeAndQuantityNodeMixin } from '../lib/TypeAndQuantityNode';
import { AggregateOfferMixin } from '../lib/AggregateOffer';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { TripMixin } from '../lib/Trip';
import { ServiceMixin } from '../lib/Service';
import { EventMixin } from '../lib/Event';
import { ProductMixin } from '../lib/Product';
import { MenuItemMixin } from '../lib/MenuItem';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';
import { WarrantyPromiseMixin } from '../lib/WarrantyPromise';

export const DemandBundle = [
  IntangibleMixin as Mixin,
  DemandMixin as Mixin,
  LoanOrCreditMixin as Mixin,
  QuantitativeValueMixin as Mixin,
  PlaceMixin as Mixin,
  AdministrativeAreaMixin as Mixin,
  GeoShapeMixin as Mixin,
  PriceSpecificationMixin as Mixin,
  TypeAndQuantityNodeMixin as Mixin,
  AggregateOfferMixin as Mixin,
  CreativeWorkMixin as Mixin,
  TripMixin as Mixin,
  ServiceMixin as Mixin,
  EventMixin as Mixin,
  ProductMixin as Mixin,
  MenuItemMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin,
  WarrantyPromiseMixin as Mixin];
