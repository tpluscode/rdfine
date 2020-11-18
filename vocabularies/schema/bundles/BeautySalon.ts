import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { HealthAndBeautyBusinessMixin } from '../lib/HealthAndBeautyBusiness';
import { BeautySalonMixin } from '../lib/BeautySalon';

export const BeautySalonBundle = [
  HealthAndBeautyBusinessMixin as Mixin,
  BeautySalonMixin as Mixin];
