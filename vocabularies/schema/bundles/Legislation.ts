import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AdministrativeAreaMixin } from '../lib/AdministrativeArea';
import { CategoryCodeMixin } from '../lib/CategoryCode';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { LegislationMixin } from '../lib/Legislation';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';

export const LegislationBundle = [
  AdministrativeAreaMixin as Mixin,
  CategoryCodeMixin as Mixin,
  CreativeWorkMixin as Mixin,
  LegislationMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin];
