import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AdministrativeAreaMixin } from '../AdministrativeArea';
import { CityMixin } from '../City';

export const CityBundle = [
  AdministrativeAreaMixin as Mixin,
  CityMixin as Mixin];
