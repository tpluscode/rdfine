import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalEntityMixin } from '../lib/MedicalEntity';
import { MedicalContraindicationMixin } from '../lib/MedicalContraindication';

export const MedicalContraindicationBundle = [
  MedicalEntityMixin as Mixin,
  MedicalContraindicationMixin as Mixin];
