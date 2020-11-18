import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { HomeAndConstructionBusinessMixin } from '../lib/HomeAndConstructionBusiness';
import { PlumberMixin } from '../lib/Plumber';

export const PlumberBundle = [
  HomeAndConstructionBusinessMixin as Mixin,
  PlumberMixin as Mixin];
