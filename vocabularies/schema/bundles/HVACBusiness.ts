import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { HomeAndConstructionBusinessMixin } from '../lib/HomeAndConstructionBusiness';
import { HVACBusinessMixin } from '../lib/HVACBusiness';

export const HVACBusinessBundle = [
  HomeAndConstructionBusinessMixin as Mixin,
  HVACBusinessMixin as Mixin];
