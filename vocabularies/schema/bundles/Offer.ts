import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../lib/Intangible';
import { OfferMixin } from '../lib/Offer';
import { LoanOrCreditMixin } from '../lib/LoanOrCredit';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';
import { AggregateRatingMixin } from '../lib/AggregateRating';
import { AdministrativeAreaMixin } from '../lib/AdministrativeArea';
import { GeoShapeMixin } from '../lib/GeoShape';
import { PlaceMixin } from '../lib/Place';
import { ThingMixin } from '../lib/Thing';
import { PriceSpecificationMixin } from '../lib/PriceSpecification';
import { TypeAndQuantityNodeMixin } from '../lib/TypeAndQuantityNode';
import { AggregateOfferMixin } from '../lib/AggregateOffer';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { EventMixin } from '../lib/Event';
import { MenuItemMixin } from '../lib/MenuItem';
import { ProductMixin } from '../lib/Product';
import { ServiceMixin } from '../lib/Service';
import { TripMixin } from '../lib/Trip';
import { DurationMixin } from '../lib/Duration';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';
import { ReviewMixin } from '../lib/Review';
import { OfferShippingDetailsMixin } from '../lib/OfferShippingDetails';
import { WarrantyPromiseMixin } from '../lib/WarrantyPromise';

export const OfferBundle = [
  IntangibleMixin as Mixin,
  OfferMixin as Mixin,
  LoanOrCreditMixin as Mixin,
  QuantitativeValueMixin as Mixin,
  AggregateRatingMixin as Mixin,
  AdministrativeAreaMixin as Mixin,
  GeoShapeMixin as Mixin,
  PlaceMixin as Mixin,
  ThingMixin as Mixin,
  PriceSpecificationMixin as Mixin,
  TypeAndQuantityNodeMixin as Mixin,
  AggregateOfferMixin as Mixin,
  CreativeWorkMixin as Mixin,
  EventMixin as Mixin,
  MenuItemMixin as Mixin,
  ProductMixin as Mixin,
  ServiceMixin as Mixin,
  TripMixin as Mixin,
  DurationMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin,
  ReviewMixin as Mixin,
  OfferShippingDetailsMixin as Mixin,
  WarrantyPromiseMixin as Mixin];
