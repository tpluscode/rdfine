import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { HomeAndConstructionBusinessMixin } from '../HomeAndConstructionBusiness';
import { ElectricianMixin } from '../Electrician';

export const ElectricianBundle = [
  HomeAndConstructionBusinessMixin as Mixin,
  ElectricianMixin as Mixin];
