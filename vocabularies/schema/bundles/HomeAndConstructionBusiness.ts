import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../lib/LocalBusiness';
import { HomeAndConstructionBusinessMixin } from '../lib/HomeAndConstructionBusiness';

export const HomeAndConstructionBusinessBundle = [
  LocalBusinessMixin as Mixin,
  HomeAndConstructionBusinessMixin as Mixin];
