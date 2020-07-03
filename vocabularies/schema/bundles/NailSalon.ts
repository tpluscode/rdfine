import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { HealthAndBeautyBusinessMixin } from '../HealthAndBeautyBusiness';
import { NailSalonMixin } from '../NailSalon';

export const NailSalonBundle = [
  HealthAndBeautyBusinessMixin as Mixin,
  NailSalonMixin as Mixin];
