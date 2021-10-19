import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../lib/Intangible';
import { OfferMixin } from '../lib/Offer';
import { LoanOrCreditMixin } from '../lib/LoanOrCredit';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';
import { AggregateRatingMixin } from '../lib/AggregateRating';
import { PlaceMixin } from '../lib/Place';
import { AdministrativeAreaMixin } from '../lib/AdministrativeArea';
import { GeoShapeMixin } from '../lib/GeoShape';
import { ThingMixin } from '../lib/Thing';
import { PriceSpecificationMixin } from '../lib/PriceSpecification';
import { MerchantReturnPolicyMixin } from '../lib/MerchantReturnPolicy';
import { TypeAndQuantityNodeMixin } from '../lib/TypeAndQuantityNode';
import { AggregateOfferMixin } from '../lib/AggregateOffer';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { TripMixin } from '../lib/Trip';
import { ServiceMixin } from '../lib/Service';
import { EventMixin } from '../lib/Event';
import { ProductMixin } from '../lib/Product';
import { MenuItemMixin } from '../lib/MenuItem';
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
  PlaceMixin as Mixin,
  AdministrativeAreaMixin as Mixin,
  GeoShapeMixin as Mixin,
  ThingMixin as Mixin,
  PriceSpecificationMixin as Mixin,
  MerchantReturnPolicyMixin as Mixin,
  TypeAndQuantityNodeMixin as Mixin,
  AggregateOfferMixin as Mixin,
  CreativeWorkMixin as Mixin,
  TripMixin as Mixin,
  ServiceMixin as Mixin,
  EventMixin as Mixin,
  ProductMixin as Mixin,
  MenuItemMixin as Mixin,
  DurationMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin,
  ReviewMixin as Mixin,
  OfferShippingDetailsMixin as Mixin,
  WarrantyPromiseMixin as Mixin];
