import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalEntityMixin } from '../lib/MedicalEntity';
import { MedicalDeviceMixin } from '../lib/MedicalDevice';
import { MedicalContraindicationMixin } from '../lib/MedicalContraindication';

export const MedicalDeviceBundle = [
  MedicalEntityMixin as Mixin,
  MedicalDeviceMixin as Mixin,
  MedicalContraindicationMixin as Mixin];
