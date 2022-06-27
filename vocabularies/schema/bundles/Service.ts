import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AdministrativeAreaMixin } from '../lib/AdministrativeArea';
import { AggregateRatingMixin } from '../lib/AggregateRating';
import { AudienceMixin } from '../lib/Audience';
import { BrandMixin } from '../lib/Brand';
import { DemandMixin } from '../lib/Demand';
import { GeoShapeMixin } from '../lib/GeoShape';
import { ImageObjectMixin } from '../lib/ImageObject';
import { IntangibleMixin } from '../lib/Intangible';
import { OfferCatalogMixin } from '../lib/OfferCatalog';
import { OfferMixin } from '../lib/Offer';
import { OpeningHoursSpecificationMixin } from '../lib/OpeningHoursSpecification';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';
import { PlaceMixin } from '../lib/Place';
import { ProductMixin } from '../lib/Product';
import { ReviewMixin } from '../lib/Review';
import { ServiceChannelMixin } from '../lib/ServiceChannel';
import { ServiceMixin } from '../lib/Service';
import { ThingMixin } from '../lib/Thing';

export const ServiceBundle = [
  AdministrativeAreaMixin as Mixin,
  AggregateRatingMixin as Mixin,
  AudienceMixin as Mixin,
  BrandMixin as Mixin,
  DemandMixin as Mixin,
  GeoShapeMixin as Mixin,
  ImageObjectMixin as Mixin,
  IntangibleMixin as Mixin,
  OfferCatalogMixin as Mixin,
  OfferMixin as Mixin,
  OpeningHoursSpecificationMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin,
  PlaceMixin as Mixin,
  ProductMixin as Mixin,
  ReviewMixin as Mixin,
  ServiceChannelMixin as Mixin,
  ServiceMixin as Mixin,
  ThingMixin as Mixin];
