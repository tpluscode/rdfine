import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalEntityMixin } from '../MedicalEntity';
import { MedicalDeviceMixin } from '../MedicalDevice';
import { MedicalContraindicationMixin } from '../MedicalContraindication';

export const MedicalDeviceBundle = [
  MedicalEntityMixin as Mixin,
  MedicalDeviceMixin as Mixin,
  MedicalContraindicationMixin as Mixin];
