import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../LocalBusiness';
import { LodgingBusinessMixin } from '../LodgingBusiness';
import { LocationFeatureSpecificationMixin } from '../LocationFeatureSpecification';
import { AudienceMixin } from '../Audience';
import { LanguageMixin } from '../Language';
import { QuantitativeValueMixin } from '../QuantitativeValue';
import { RatingMixin } from '../Rating';

export const LodgingBusinessBundle = [
  LocalBusinessMixin as Mixin,
  LodgingBusinessMixin as Mixin,
  LocationFeatureSpecificationMixin as Mixin,
  AudienceMixin as Mixin,
  LanguageMixin as Mixin,
  QuantitativeValueMixin as Mixin,
  RatingMixin as Mixin];
