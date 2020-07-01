import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { HomeAndConstructionBusinessMixin } from '../HomeAndConstructionBusiness';
import { HVACBusinessMixin } from '../HVACBusiness';

export const HVACBusinessBundle = [
  HomeAndConstructionBusinessMixin as Mixin,
  HVACBusinessMixin as Mixin];
