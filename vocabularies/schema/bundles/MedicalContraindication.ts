import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalEntityMixin } from '../MedicalEntity';
import { MedicalContraindicationMixin } from '../MedicalContraindication';

export const MedicalContraindicationBundle = [
  MedicalEntityMixin as Mixin,
  MedicalContraindicationMixin as Mixin];
