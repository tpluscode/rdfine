import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalEntityMixin } from '../MedicalEntity';
import { SubstanceMixin } from '../Substance';
import { MaximumDoseScheduleMixin } from '../MaximumDoseSchedule';

export const SubstanceBundle = [
  MedicalEntityMixin as Mixin,
  SubstanceMixin as Mixin,
  MaximumDoseScheduleMixin as Mixin];
