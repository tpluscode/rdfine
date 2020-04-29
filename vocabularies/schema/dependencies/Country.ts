import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AdministrativeAreaMixin } from '../AdministrativeArea';
import { CountryMixin } from '../Country';

export const CountryDependencies = [
  AdministrativeAreaMixin as Mixin,
  CountryMixin as Mixin];
