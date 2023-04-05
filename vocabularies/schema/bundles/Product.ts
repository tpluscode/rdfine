import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AggregateRatingMixin } from '../lib/AggregateRating';
import { AudienceMixin } from '../lib/Audience';
import { BrandMixin } from '../lib/Brand';
import { CountryMixin } from '../lib/Country';
import { DemandMixin } from '../lib/Demand';
import { DistanceMixin } from '../lib/Distance';
import { EnergyConsumptionDetailsMixin } from '../lib/EnergyConsumptionDetails';
import { ImageObjectMixin } from '../lib/ImageObject';
import { MerchantReturnPolicyMixin } from '../lib/MerchantReturnPolicy';
import { OfferMixin } from '../lib/Offer';
import { OrganizationMixin } from '../lib/Organization';
import { ProductGroupMixin } from '../lib/ProductGroup';
import { ProductMixin } from '../lib/Product';
import { ProductModelMixin } from '../lib/ProductModel';
import { PropertyValueMixin } from '../lib/PropertyValue';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';
import { ReviewMixin } from '../lib/Review';
import { ServiceMixin } from '../lib/Service';
import { ThingMixin } from '../lib/Thing';

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
