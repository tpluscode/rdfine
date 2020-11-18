import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AudienceMixin } from '../lib/Audience';
import { BusinessAudienceMixin } from '../lib/BusinessAudience';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';

export const BusinessAudienceBundle = [
  AudienceMixin as Mixin,
  BusinessAudienceMixin as Mixin,
  QuantitativeValueMixin as Mixin];
