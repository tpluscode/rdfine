import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalEntityMixin } from '../MedicalEntity';
import { LifestyleModificationMixin } from '../LifestyleModification';

export const LifestyleModificationBundle = [
  MedicalEntityMixin as Mixin,
  LifestyleModificationMixin as Mixin];
