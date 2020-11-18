import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { HealthAndBeautyBusinessMixin } from '../lib/HealthAndBeautyBusiness';
import { HairSalonMixin } from '../lib/HairSalon';

export const HairSalonBundle = [
  HealthAndBeautyBusinessMixin as Mixin,
  HairSalonMixin as Mixin];
