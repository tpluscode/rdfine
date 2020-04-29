import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { HomeAndConstructionBusinessMixin } from '../HomeAndConstructionBusiness';
import { HVACBusinessMixin } from '../HVACBusiness';

export const HVACBusinessDependencies = [
  HomeAndConstructionBusinessMixin as Mixin,
  HVACBusinessMixin as Mixin];
