import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AdministrativeAreaMixin } from '../lib/AdministrativeArea';
import { CityMixin } from '../lib/City';

export const CityBundle = [
  AdministrativeAreaMixin as Mixin,
  CityMixin as Mixin];
