import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AdministrativeAreaMixin } from '../AdministrativeArea';
import { CountryMixin } from '../Country';

export const CountryBundle = [
  AdministrativeAreaMixin as Mixin,
  CountryMixin as Mixin];
