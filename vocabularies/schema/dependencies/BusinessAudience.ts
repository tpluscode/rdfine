import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AudienceMixin } from '../Audience';
import { BusinessAudienceMixin } from '../BusinessAudience';
import { QuantitativeValueMixin } from '../QuantitativeValue';

export const BusinessAudienceDependencies = [
  AudienceMixin as Mixin,
  BusinessAudienceMixin as Mixin,
  QuantitativeValueMixin as Mixin];
