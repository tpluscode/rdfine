import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../lib/Intangible';
import { GrantMixin } from '../lib/Grant';
import { ThingMixin } from '../lib/Thing';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';

export const GrantBundle = [
  IntangibleMixin as Mixin,
  GrantMixin as Mixin,
  ThingMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin];
