import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalEntityMixin } from '../lib/MedicalEntity';
import { LifestyleModificationMixin } from '../lib/LifestyleModification';

export const LifestyleModificationBundle = [
  MedicalEntityMixin as Mixin,
  LifestyleModificationMixin as Mixin];
