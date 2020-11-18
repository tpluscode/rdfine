import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { HomeAndConstructionBusinessMixin } from '../lib/HomeAndConstructionBusiness';
import { ElectricianMixin } from '../lib/Electrician';

export const ElectricianBundle = [
  HomeAndConstructionBusinessMixin as Mixin,
  ElectricianMixin as Mixin];
