import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ThingMixin } from '../lib/Thing';
import { ProductMixin } from '../lib/Product';
import { PropertyValueMixin } from '../lib/PropertyValue';
import { AggregateRatingMixin } from '../lib/AggregateRating';
import { AudienceMixin } from '../lib/Audience';
import { OrganizationMixin } from '../lib/Organization';
import { BrandMixin } from '../lib/Brand';
import { DistanceMixin } from '../lib/Distance';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';
import { EnergyConsumptionDetailsMixin } from '../lib/EnergyConsumptionDetails';
import { MerchantReturnPolicyMixin } from '../lib/MerchantReturnPolicy';
import { ServiceMixin } from '../lib/Service';
import { ProductGroupMixin } from '../lib/ProductGroup';
import { ProductModelMixin } from '../lib/ProductModel';
import { ImageObjectMixin } from '../lib/ImageObject';
import { OfferMixin } from '../lib/Offer';
import { DemandMixin } from '../lib/Demand';
import { ReviewMixin } from '../lib/Review';

export const ProductBundle = [
  ThingMixin as Mixin,
  ProductMixin as Mixin,
  PropertyValueMixin as Mixin,
  AggregateRatingMixin as Mixin,
  AudienceMixin as Mixin,
  OrganizationMixin as Mixin,
  BrandMixin as Mixin,
  DistanceMixin as Mixin,
  QuantitativeValueMixin as Mixin,
  EnergyConsumptionDetailsMixin as Mixin,
  MerchantReturnPolicyMixin as Mixin,
  ServiceMixin as Mixin,
  ProductGroupMixin as Mixin,
  ProductModelMixin as Mixin,
  ImageObjectMixin as Mixin,
  OfferMixin as Mixin,
  DemandMixin as Mixin,
  ReviewMixin as Mixin];
