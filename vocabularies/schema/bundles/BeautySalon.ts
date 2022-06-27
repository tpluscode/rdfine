import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BeautySalonMixin } from '../lib/BeautySalon';
import { HealthAndBeautyBusinessMixin } from '../lib/HealthAndBeautyBusiness';

export const BeautySalonBundle = [
  BeautySalonMixin as Mixin,
  HealthAndBeautyBusinessMixin as Mixin];
