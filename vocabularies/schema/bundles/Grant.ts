import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../Intangible';
import { GrantMixin } from '../Grant';
import { ThingMixin } from '../Thing';
import { OrganizationMixin } from '../Organization';
import { PersonMixin } from '../Person';

export const GrantBundle = [
  IntangibleMixin as Mixin,
  GrantMixin as Mixin,
  ThingMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin];
