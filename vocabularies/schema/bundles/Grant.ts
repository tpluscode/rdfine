import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { GrantMixin } from '../lib/Grant';
import { IntangibleMixin } from '../lib/Intangible';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';
import { ThingMixin } from '../lib/Thing';

export const GrantBundle = [
  GrantMixin as Mixin,
  IntangibleMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin,
  ThingMixin as Mixin];
