import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { LegislationMixin } from '../lib/Legislation';
import { AdministrativeAreaMixin } from '../lib/AdministrativeArea';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';
import { CategoryCodeMixin } from '../lib/CategoryCode';

export const LegislationBundle = [
  CreativeWorkMixin as Mixin,
  LegislationMixin as Mixin,
  AdministrativeAreaMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin,
  CategoryCodeMixin as Mixin];
