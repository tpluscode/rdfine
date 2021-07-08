import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../lib/Intangible';
import { ServiceMixin } from '../lib/Service';
import { AggregateRatingMixin } from '../lib/AggregateRating';
import { PlaceMixin } from '../lib/Place';
import { AdministrativeAreaMixin } from '../lib/AdministrativeArea';
import { GeoShapeMixin } from '../lib/GeoShape';
import { AudienceMixin } from '../lib/Audience';
import { ServiceChannelMixin } from '../lib/ServiceChannel';
import { OrganizationMixin } from '../lib/Organization';
import { BrandMixin } from '../lib/Brand';
import { PersonMixin } from '../lib/Person';
import { ThingMixin } from '../lib/Thing';
import { OfferCatalogMixin } from '../lib/OfferCatalog';
import { OpeningHoursSpecificationMixin } from '../lib/OpeningHoursSpecification';
import { ProductMixin } from '../lib/Product';
import { ImageObjectMixin } from '../lib/ImageObject';
import { OfferMixin } from '../lib/Offer';
import { DemandMixin } from '../lib/Demand';
import { ReviewMixin } from '../lib/Review';

export const ServiceBundle = [
  IntangibleMixin as Mixin,
  ServiceMixin as Mixin,
  AggregateRatingMixin as Mixin,
  PlaceMixin as Mixin,
  AdministrativeAreaMixin as Mixin,
  GeoShapeMixin as Mixin,
  AudienceMixin as Mixin,
  ServiceChannelMixin as Mixin,
  OrganizationMixin as Mixin,
  BrandMixin as Mixin,
  PersonMixin as Mixin,
  ThingMixin as Mixin,
  OfferCatalogMixin as Mixin,
  OpeningHoursSpecificationMixin as Mixin,
  ProductMixin as Mixin,
  ImageObjectMixin as Mixin,
  OfferMixin as Mixin,
  DemandMixin as Mixin,
  ReviewMixin as Mixin];
