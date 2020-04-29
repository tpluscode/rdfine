import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../Intangible';
import { ServiceMixin } from '../Service';
import { AggregateRatingMixin } from '../AggregateRating';
import { AdministrativeAreaMixin } from '../AdministrativeArea';
import { GeoShapeMixin } from '../GeoShape';
import { PlaceMixin } from '../Place';
import { AudienceMixin } from '../Audience';
import { ServiceChannelMixin } from '../ServiceChannel';
import { BrandMixin } from '../Brand';
import { OrganizationMixin } from '../Organization';
import { PersonMixin } from '../Person';
import { ThingMixin } from '../Thing';
import { OfferCatalogMixin } from '../OfferCatalog';
import { OpeningHoursSpecificationMixin } from '../OpeningHoursSpecification';
import { ProductMixin } from '../Product';
import { ImageObjectMixin } from '../ImageObject';
import { DemandMixin } from '../Demand';
import { OfferMixin } from '../Offer';
import { ReviewMixin } from '../Review';

export const ServiceDependencies = [
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
