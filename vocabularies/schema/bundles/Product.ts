import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AggregateRatingMixin } from '../lib/AggregateRating.js';
import { AudienceMixin } from '../lib/Audience.js';
import { BrandMixin } from '../lib/Brand.js';
import { CountryMixin } from '../lib/Country.js';
import { DemandMixin } from '../lib/Demand.js';
import { DistanceMixin } from '../lib/Distance.js';
import { EnergyConsumptionDetailsMixin } from '../lib/EnergyConsumptionDetails.js';
import { ImageObjectMixin } from '../lib/ImageObject.js';
import { MerchantReturnPolicyMixin } from '../lib/MerchantReturnPolicy.js';
import { OfferMixin } from '../lib/Offer.js';
import { OrganizationMixin } from '../lib/Organization.js';
import { ProductGroupMixin } from '../lib/ProductGroup.js';
import { ProductMixin } from '../lib/Product.js';
import { ProductModelMixin } from '../lib/ProductModel.js';
import { PropertyValueMixin } from '../lib/PropertyValue.js';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue.js';
import { ReviewMixin } from '../lib/Review.js';
import { ServiceMixin } from '../lib/Service.js';
import { ThingMixin } from '../lib/Thing.js';

export const ProductBundle = [
  AggregateRatingMixin as Mixin,
  AudienceMixin as Mixin,
  BrandMixin as Mixin,
  CountryMixin as Mixin,
  DemandMixin as Mixin,
  DistanceMixin as Mixin,
  EnergyConsumptionDetailsMixin as Mixin,
  ImageObjectMixin as Mixin,
  MerchantReturnPolicyMixin as Mixin,
  OfferMixin as Mixin,
  OrganizationMixin as Mixin,
  ProductGroupMixin as Mixin,
  ProductMixin as Mixin,
  ProductModelMixin as Mixin,
  PropertyValueMixin as Mixin,
  QuantitativeValueMixin as Mixin,
  ReviewMixin as Mixin,
  ServiceMixin as Mixin,
  ThingMixin as Mixin];
