import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { HomeAndConstructionBusinessMixin } from '../lib/HomeAndConstructionBusiness';
import { LocalBusinessMixin } from '../lib/LocalBusiness';

export const HomeAndConstructionBusinessBundle = [
  HomeAndConstructionBusinessMixin as Mixin,
  LocalBusinessMixin as Mixin];
