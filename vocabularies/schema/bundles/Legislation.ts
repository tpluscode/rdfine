import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { LegislationMixin } from '../Legislation';
import { AdministrativeAreaMixin } from '../AdministrativeArea';
import { OrganizationMixin } from '../Organization';
import { PersonMixin } from '../Person';
import { CategoryCodeMixin } from '../CategoryCode';

export const LegislationBundle = [
  CreativeWorkMixin as Mixin,
  LegislationMixin as Mixin,
  AdministrativeAreaMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin,
  CategoryCodeMixin as Mixin];
