import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DietarySupplementMixin } from '../lib/DietarySupplement';
import { DrugLegalStatusMixin } from '../lib/DrugLegalStatus';
import { MaximumDoseScheduleMixin } from '../lib/MaximumDoseSchedule';
import { OrganizationMixin } from '../lib/Organization';
import { RecommendedDoseScheduleMixin } from '../lib/RecommendedDoseSchedule';
import { SubstanceMixin } from '../lib/Substance';

export const DietarySupplementBundle = [
  DietarySupplementMixin as Mixin,
  DrugLegalStatusMixin as Mixin,
  MaximumDoseScheduleMixin as Mixin,
  OrganizationMixin as Mixin,
  RecommendedDoseScheduleMixin as Mixin,
  SubstanceMixin as Mixin];
