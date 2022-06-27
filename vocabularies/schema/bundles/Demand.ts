import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AdministrativeAreaMixin } from '../lib/AdministrativeArea';
import { AggregateOfferMixin } from '../lib/AggregateOffer';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { DemandMixin } from '../lib/Demand';
import { EventMixin } from '../lib/Event';
import { GeoShapeMixin } from '../lib/GeoShape';
import { IntangibleMixin } from '../lib/Intangible';
import { LoanOrCreditMixin } from '../lib/LoanOrCredit';
import { MenuItemMixin } from '../lib/MenuItem';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';
import { PlaceMixin } from '../lib/Place';
import { PriceSpecificationMixin } from '../lib/PriceSpecification';
import { ProductMixin } from '../lib/Product';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';
import { ServiceMixin } from '../lib/Service';
import { TripMixin } from '../lib/Trip';
import { TypeAndQuantityNodeMixin } from '../lib/TypeAndQuantityNode';
import { WarrantyPromiseMixin } from '../lib/WarrantyPromise';

export const DemandBundle = [
  AdministrativeAreaMixin as Mixin,
  AggregateOfferMixin as Mixin,
  CreativeWorkMixin as Mixin,
  DemandMixin as Mixin,
  EventMixin as Mixin,
  GeoShapeMixin as Mixin,
  IntangibleMixin as Mixin,
  LoanOrCreditMixin as Mixin,
  MenuItemMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin,
  PlaceMixin as Mixin,
  PriceSpecificationMixin as Mixin,
  ProductMixin as Mixin,
  QuantitativeValueMixin as Mixin,
  ServiceMixin as Mixin,
  TripMixin as Mixin,
  TypeAndQuantityNodeMixin as Mixin,
  WarrantyPromiseMixin as Mixin];
