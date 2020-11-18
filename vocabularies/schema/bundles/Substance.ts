import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalEntityMixin } from '../lib/MedicalEntity';
import { SubstanceMixin } from '../lib/Substance';
import { MaximumDoseScheduleMixin } from '../lib/MaximumDoseSchedule';

export const SubstanceBundle = [
  MedicalEntityMixin as Mixin,
  SubstanceMixin as Mixin,
  MaximumDoseScheduleMixin as Mixin];
