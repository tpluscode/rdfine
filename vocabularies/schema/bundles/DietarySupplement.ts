import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DietarySupplementMixin } from '../lib/DietarySupplement.js';
import { DrugLegalStatusMixin } from '../lib/DrugLegalStatus.js';
import { MaximumDoseScheduleMixin } from '../lib/MaximumDoseSchedule.js';
import { OrganizationMixin } from '../lib/Organization.js';
import { RecommendedDoseScheduleMixin } from '../lib/RecommendedDoseSchedule.js';
import { SubstanceMixin } from '../lib/Substance.js';

export const DietarySupplementBundle = [
  DietarySupplementMixin as Mixin,
  DrugLegalStatusMixin as Mixin,
  MaximumDoseScheduleMixin as Mixin,
  OrganizationMixin as Mixin,
  RecommendedDoseScheduleMixin as Mixin,
  SubstanceMixin as Mixin];
