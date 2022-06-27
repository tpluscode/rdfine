import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MaximumDoseScheduleMixin } from '../lib/MaximumDoseSchedule';
import { MedicalEntityMixin } from '../lib/MedicalEntity';
import { SubstanceMixin } from '../lib/Substance';

export const SubstanceBundle = [
  MaximumDoseScheduleMixin as Mixin,
  MedicalEntityMixin as Mixin,
  SubstanceMixin as Mixin];
