import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DaySpaMixin } from '../lib/DaySpa';
import { HealthAndBeautyBusinessMixin } from '../lib/HealthAndBeautyBusiness';

export const DaySpaBundle = [
  DaySpaMixin as Mixin,
  HealthAndBeautyBusinessMixin as Mixin];
