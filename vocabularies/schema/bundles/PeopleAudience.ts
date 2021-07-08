import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AudienceMixin } from '../lib/Audience';
import { PeopleAudienceMixin } from '../lib/PeopleAudience';
import { MedicalConditionMixin } from '../lib/MedicalCondition';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';

export const PeopleAudienceBundle = [
  AudienceMixin as Mixin,
  PeopleAudienceMixin as Mixin,
  MedicalConditionMixin as Mixin,
  QuantitativeValueMixin as Mixin];
