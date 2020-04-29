import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ThingMixin } from '../Thing';
import { ProductMixin } from '../Product';
import { PropertyValueMixin } from '../PropertyValue';
import { AggregateRatingMixin } from '../AggregateRating';
import { AudienceMixin } from '../Audience';
import { BrandMixin } from '../Brand';
import { OrganizationMixin } from '../Organization';
import { DistanceMixin } from '../Distance';
import { QuantitativeValueMixin } from '../QuantitativeValue';
import { ServiceMixin } from '../Service';
import { ImageObjectMixin } from '../ImageObject';
import { ProductModelMixin } from '../ProductModel';
import { DemandMixin } from '../Demand';
import { OfferMixin } from '../Offer';
import { ReviewMixin } from '../Review';

export const ProductDependencies = [
  ThingMixin as Mixin,
  ProductMixin as Mixin,
  PropertyValueMixin as Mixin,
  AggregateRatingMixin as Mixin,
  AudienceMixin as Mixin,
  BrandMixin as Mixin,
  OrganizationMixin as Mixin,
  DistanceMixin as Mixin,
  QuantitativeValueMixin as Mixin,
  ServiceMixin as Mixin,
  ImageObjectMixin as Mixin,
  ProductModelMixin as Mixin,
  DemandMixin as Mixin,
  OfferMixin as Mixin,
  ReviewMixin as Mixin];
