import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../LocalBusiness';
import { HomeAndConstructionBusinessMixin } from '../HomeAndConstructionBusiness';

export const HomeAndConstructionBusinessBundle = [
  LocalBusinessMixin as Mixin,
  HomeAndConstructionBusinessMixin as Mixin];
