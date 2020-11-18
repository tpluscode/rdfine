import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SubstanceMixin } from '../lib/Substance';
import { DietarySupplementMixin } from '../lib/DietarySupplement';
import { DrugLegalStatusMixin } from '../lib/DrugLegalStatus';
import { OrganizationMixin } from '../lib/Organization';
import { MaximumDoseScheduleMixin } from '../lib/MaximumDoseSchedule';
import { RecommendedDoseScheduleMixin } from '../lib/RecommendedDoseSchedule';

export const DietarySupplementBundle = [
  SubstanceMixin as Mixin,
  DietarySupplementMixin as Mixin,
  DrugLegalStatusMixin as Mixin,
  OrganizationMixin as Mixin,
  MaximumDoseScheduleMixin as Mixin,
  RecommendedDoseScheduleMixin as Mixin];
