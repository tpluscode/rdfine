import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalEntityMixin } from '../MedicalEntity';
import { DrugClassMixin } from '../DrugClass';
import { DrugMixin } from '../Drug';

export const DrugClassBundle = [
  MedicalEntityMixin as Mixin,
  DrugClassMixin as Mixin,
  DrugMixin as Mixin];
