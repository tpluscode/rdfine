import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { HealthAndBeautyBusinessMixin } from '../HealthAndBeautyBusiness';
import { DaySpaMixin } from '../DaySpa';

export const DaySpaDependencies = [
  HealthAndBeautyBusinessMixin as Mixin,
  DaySpaMixin as Mixin];
