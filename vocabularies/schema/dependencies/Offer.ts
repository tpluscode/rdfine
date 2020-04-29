import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../Intangible';
import { OfferMixin } from '../Offer';
import { LoanOrCreditMixin } from '../LoanOrCredit';
import { QuantitativeValueMixin } from '../QuantitativeValue';
import { AggregateRatingMixin } from '../AggregateRating';
import { AdministrativeAreaMixin } from '../AdministrativeArea';
import { GeoShapeMixin } from '../GeoShape';
import { PlaceMixin } from '../Place';
import { ThingMixin } from '../Thing';
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
import { ReviewMixin } from '../Review';
import { WarrantyPromiseMixin } from '../WarrantyPromise';

export const OfferDependencies = [
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
  OrganizationMixin as Mixin,
  PersonMixin as Mixin,
  ReviewMixin as Mixin,
  WarrantyPromiseMixin as Mixin];
