import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { HomeAndConstructionBusinessMixin } from '../HomeAndConstructionBusiness';
import { ElectricianMixin } from '../Electrician';

export const ElectricianDependencies = [
  HomeAndConstructionBusinessMixin as Mixin,
  ElectricianMixin as Mixin];
