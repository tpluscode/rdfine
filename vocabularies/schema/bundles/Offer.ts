import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AdministrativeAreaMixin } from '../lib/AdministrativeArea';
import { AggregateOfferMixin } from '../lib/AggregateOffer';
import { AggregateRatingMixin } from '../lib/AggregateRating';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { DurationMixin } from '../lib/Duration';
import { EventMixin } from '../lib/Event';
import { GeoShapeMixin } from '../lib/GeoShape';
import { IntangibleMixin } from '../lib/Intangible';
import { LoanOrCreditMixin } from '../lib/LoanOrCredit';
import { MenuItemMixin } from '../lib/MenuItem';
import { MerchantReturnPolicyMixin } from '../lib/MerchantReturnPolicy';
import { OfferMixin } from '../lib/Offer';
import { OfferShippingDetailsMixin } from '../lib/OfferShippingDetails';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';
import { PlaceMixin } from '../lib/Place';
import { PriceSpecificationMixin } from '../lib/PriceSpecification';
import { ProductMixin } from '../lib/Product';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';
import { ReviewMixin } from '../lib/Review';
import { ServiceMixin } from '../lib/Service';
import { ThingMixin } from '../lib/Thing';
import { TripMixin } from '../lib/Trip';
import { TypeAndQuantityNodeMixin } from '../lib/TypeAndQuantityNode';
import { WarrantyPromiseMixin } from '../lib/WarrantyPromise';

export const OfferBundle = [
  AdministrativeAreaMixin as Mixin,
  AggregateOfferMixin as Mixin,
  AggregateRatingMixin as Mixin,
  CreativeWorkMixin as Mixin,
  DurationMixin as Mixin,
  EventMixin as Mixin,
  GeoShapeMixin as Mixin,
  IntangibleMixin as Mixin,
  LoanOrCreditMixin as Mixin,
  MenuItemMixin as Mixin,
  MerchantReturnPolicyMixin as Mixin,
  OfferMixin as Mixin,
  OfferShippingDetailsMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin,
  PlaceMixin as Mixin,
  PriceSpecificationMixin as Mixin,
  ProductMixin as Mixin,
  QuantitativeValueMixin as Mixin,
  ReviewMixin as Mixin,
  ServiceMixin as Mixin,
  ThingMixin as Mixin,
  TripMixin as Mixin,
  TypeAndQuantityNodeMixin as Mixin,
  WarrantyPromiseMixin as Mixin];
