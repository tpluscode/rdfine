import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SubstanceMixin } from '../Substance';
import { DietarySupplementMixin } from '../DietarySupplement';
import { DrugLegalStatusMixin } from '../DrugLegalStatus';
import { OrganizationMixin } from '../Organization';
import { MaximumDoseScheduleMixin } from '../MaximumDoseSchedule';
import { RecommendedDoseScheduleMixin } from '../RecommendedDoseSchedule';

export const DietarySupplementBundle = [
  SubstanceMixin as Mixin,
  DietarySupplementMixin as Mixin,
  DrugLegalStatusMixin as Mixin,
  OrganizationMixin as Mixin,
  MaximumDoseScheduleMixin as Mixin,
  RecommendedDoseScheduleMixin as Mixin];
