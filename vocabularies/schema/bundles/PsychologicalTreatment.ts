import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PsychologicalTreatmentMixin } from '../lib/PsychologicalTreatment';
import { TherapeuticProcedureMixin } from '../lib/TherapeuticProcedure';

export const PsychologicalTreatmentBundle = [
  PsychologicalTreatmentMixin as Mixin,
  TherapeuticProcedureMixin as Mixin];
