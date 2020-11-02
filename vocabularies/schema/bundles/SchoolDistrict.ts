import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AdministrativeAreaMixin } from '../AdministrativeArea';
import { SchoolDistrictMixin } from '../SchoolDistrict';

export const SchoolDistrictBundle = [
  AdministrativeAreaMixin as Mixin,
  SchoolDistrictMixin as Mixin];
