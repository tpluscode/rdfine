import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { HealthAndBeautyBusinessMixin } from '../lib/HealthAndBeautyBusiness';
import { NailSalonMixin } from '../lib/NailSalon';

export const NailSalonBundle = [
  HealthAndBeautyBusinessMixin as Mixin,
  NailSalonMixin as Mixin];
