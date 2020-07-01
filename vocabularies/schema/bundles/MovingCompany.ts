import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { HomeAndConstructionBusinessMixin } from '../HomeAndConstructionBusiness';
import { MovingCompanyMixin } from '../MovingCompany';

export const MovingCompanyBundle = [
  HomeAndConstructionBusinessMixin as Mixin,
  MovingCompanyMixin as Mixin];
