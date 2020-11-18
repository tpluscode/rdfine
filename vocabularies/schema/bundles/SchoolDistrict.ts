import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AdministrativeAreaMixin } from '../lib/AdministrativeArea';
import { SchoolDistrictMixin } from '../lib/SchoolDistrict';

export const SchoolDistrictBundle = [
  AdministrativeAreaMixin as Mixin,
  SchoolDistrictMixin as Mixin];
