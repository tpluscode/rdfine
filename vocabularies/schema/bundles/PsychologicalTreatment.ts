import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { TherapeuticProcedureMixin } from '../lib/TherapeuticProcedure';
import { PsychologicalTreatmentMixin } from '../lib/PsychologicalTreatment';

export const PsychologicalTreatmentBundle = [
  TherapeuticProcedureMixin as Mixin,
  PsychologicalTreatmentMixin as Mixin];
