import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalContraindicationMixin } from '../lib/MedicalContraindication';
import { MedicalEntityMixin } from '../lib/MedicalEntity';

export const MedicalContraindicationBundle = [
  MedicalContraindicationMixin as Mixin,
  MedicalEntityMixin as Mixin];
