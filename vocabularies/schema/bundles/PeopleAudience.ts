import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AudienceMixin } from '../lib/Audience';
import { MedicalConditionMixin } from '../lib/MedicalCondition';
import { PeopleAudienceMixin } from '../lib/PeopleAudience';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';

export const PeopleAudienceBundle = [
  AudienceMixin as Mixin,
  MedicalConditionMixin as Mixin,
  PeopleAudienceMixin as Mixin,
  QuantitativeValueMixin as Mixin];
