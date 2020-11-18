import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AdministrativeAreaMixin } from '../lib/AdministrativeArea';
import { CountryMixin } from '../lib/Country';

export const CountryBundle = [
  AdministrativeAreaMixin as Mixin,
  CountryMixin as Mixin];
