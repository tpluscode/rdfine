import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../lib/LocalBusiness';
import { LodgingBusinessMixin } from '../lib/LodgingBusiness';
import { LocationFeatureSpecificationMixin } from '../lib/LocationFeatureSpecification';
import { AudienceMixin } from '../lib/Audience';
import { LanguageMixin } from '../lib/Language';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';
import { RatingMixin } from '../lib/Rating';

export const LodgingBusinessBundle = [
  LocalBusinessMixin as Mixin,
  LodgingBusinessMixin as Mixin,
  LocationFeatureSpecificationMixin as Mixin,
  AudienceMixin as Mixin,
  LanguageMixin as Mixin,
  QuantitativeValueMixin as Mixin,
  RatingMixin as Mixin];
