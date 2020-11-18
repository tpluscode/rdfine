import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { HealthAndBeautyBusinessMixin } from '../lib/HealthAndBeautyBusiness';
import { DaySpaMixin } from '../lib/DaySpa';

export const DaySpaBundle = [
  HealthAndBeautyBusinessMixin as Mixin,
  DaySpaMixin as Mixin];
