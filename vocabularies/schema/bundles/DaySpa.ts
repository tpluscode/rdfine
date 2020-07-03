import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { HealthAndBeautyBusinessMixin } from '../HealthAndBeautyBusiness';
import { DaySpaMixin } from '../DaySpa';

export const DaySpaBundle = [
  HealthAndBeautyBusinessMixin as Mixin,
  DaySpaMixin as Mixin];
