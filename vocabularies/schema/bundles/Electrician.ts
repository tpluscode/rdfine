import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ElectricianMixin } from '../lib/Electrician';
import { HomeAndConstructionBusinessMixin } from '../lib/HomeAndConstructionBusiness';

export const ElectricianBundle = [
  ElectricianMixin as Mixin,
  HomeAndConstructionBusinessMixin as Mixin];
