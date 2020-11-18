import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { HomeAndConstructionBusinessMixin } from '../lib/HomeAndConstructionBusiness';
import { MovingCompanyMixin } from '../lib/MovingCompany';

export const MovingCompanyBundle = [
  HomeAndConstructionBusinessMixin as Mixin,
  MovingCompanyMixin as Mixin];
