import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalContraindicationMixin } from '../lib/MedicalContraindication';
import { MedicalDeviceMixin } from '../lib/MedicalDevice';
import { MedicalEntityMixin } from '../lib/MedicalEntity';

export const MedicalDeviceBundle = [
  MedicalContraindicationMixin as Mixin,
  MedicalDeviceMixin as Mixin,
  MedicalEntityMixin as Mixin];
