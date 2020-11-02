import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { TherapeuticProcedureMixin } from '../TherapeuticProcedure';
import { PsychologicalTreatmentMixin } from '../PsychologicalTreatment';

export const PsychologicalTreatmentBundle = [
  TherapeuticProcedureMixin as Mixin,
  PsychologicalTreatmentMixin as Mixin];
