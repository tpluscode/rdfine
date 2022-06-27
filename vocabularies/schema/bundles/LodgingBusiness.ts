import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AudienceMixin } from '../lib/Audience';
import { LanguageMixin } from '../lib/Language';
import { LocalBusinessMixin } from '../lib/LocalBusiness';
import { LocationFeatureSpecificationMixin } from '../lib/LocationFeatureSpecification';
import { LodgingBusinessMixin } from '../lib/LodgingBusiness';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';
import { RatingMixin } from '../lib/Rating';

export const LodgingBusinessBundle = [
  AudienceMixin as Mixin,
  LanguageMixin as Mixin,
  LocalBusinessMixin as Mixin,
  LocationFeatureSpecificationMixin as Mixin,
  LodgingBusinessMixin as Mixin,
  QuantitativeValueMixin as Mixin,
  RatingMixin as Mixin];
