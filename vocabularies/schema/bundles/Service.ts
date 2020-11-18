import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../lib/Intangible';
import { ServiceMixin } from '../lib/Service';
import { AggregateRatingMixin } from '../lib/AggregateRating';
import { AdministrativeAreaMixin } from '../lib/AdministrativeArea';
import { GeoShapeMixin } from '../lib/GeoShape';
import { PlaceMixin } from '../lib/Place';
import { AudienceMixin } from '../lib/Audience';
import { ServiceChannelMixin } from '../lib/ServiceChannel';
import { BrandMixin } from '../lib/Brand';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';
import { ThingMixin } from '../lib/Thing';
import { OfferCatalogMixin } from '../lib/OfferCatalog';
import { OpeningHoursSpecificationMixin } from '../lib/OpeningHoursSpecification';
import { ProductMixin } from '../lib/Product';
import { ImageObjectMixin } from '../lib/ImageObject';
import { DemandMixin } from '../lib/Demand';
import { OfferMixin } from '../lib/Offer';
import { ReviewMixin } from '../lib/Review';

export const ServiceBundle = [
  IntangibleMixin as Mixin,
  ServiceMixin as Mixin,
  AggregateRatingMixin as Mixin,
  AdministrativeAreaMixin as Mixin,
  GeoShapeMixin as Mixin,
  PlaceMixin as Mixin,
  AudienceMixin as Mixin,
  ServiceChannelMixin as Mixin,
  BrandMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin,
  ThingMixin as Mixin,
  OfferCatalogMixin as Mixin,
  OpeningHoursSpecificationMixin as Mixin,
  ProductMixin as Mixin,
  ImageObjectMixin as Mixin,
  DemandMixin as Mixin,
  OfferMixin as Mixin,
  ReviewMixin as Mixin];
