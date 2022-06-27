import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { HairSalonMixin } from '../lib/HairSalon';
import { HealthAndBeautyBusinessMixin } from '../lib/HealthAndBeautyBusiness';

export const HairSalonBundle = [
  HairSalonMixin as Mixin,
  HealthAndBeautyBusinessMixin as Mixin];
