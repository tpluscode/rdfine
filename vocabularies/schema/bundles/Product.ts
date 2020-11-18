import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ThingMixin } from '../lib/Thing';
import { ProductMixin } from '../lib/Product';
import { PropertyValueMixin } from '../lib/PropertyValue';
import { AggregateRatingMixin } from '../lib/AggregateRating';
import { AudienceMixin } from '../lib/Audience';
import { BrandMixin } from '../lib/Brand';
import { OrganizationMixin } from '../lib/Organization';
import { DistanceMixin } from '../lib/Distance';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';
import { MerchantReturnPolicyMixin } from '../lib/MerchantReturnPolicy';
import { ServiceMixin } from '../lib/Service';
import { ProductGroupMixin } from '../lib/ProductGroup';
import { ProductModelMixin } from '../lib/ProductModel';
import { ImageObjectMixin } from '../lib/ImageObject';
import { DemandMixin } from '../lib/Demand';
import { OfferMixin } from '../lib/Offer';
import { ReviewMixin } from '../lib/Review';

export const ProductBundle = [
  ThingMixin as Mixin,
  ProductMixin as Mixin,
  PropertyValueMixin as Mixin,
  AggregateRatingMixin as Mixin,
  AudienceMixin as Mixin,
  BrandMixin as Mixin,
  OrganizationMixin as Mixin,
  DistanceMixin as Mixin,
  QuantitativeValueMixin as Mixin,
  MerchantReturnPolicyMixin as Mixin,
  ServiceMixin as Mixin,
  ProductGroupMixin as Mixin,
  ProductModelMixin as Mixin,
  ImageObjectMixin as Mixin,
  DemandMixin as Mixin,
  OfferMixin as Mixin,
  ReviewMixin as Mixin];
