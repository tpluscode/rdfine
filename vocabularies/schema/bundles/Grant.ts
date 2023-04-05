import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { GrantMixin } from '../lib/Grant.js';
import { IntangibleMixin } from '../lib/Intangible.js';
import { OrganizationMixin } from '../lib/Organization.js';
import { PersonMixin } from '../lib/Person.js';
import { ThingMixin } from '../lib/Thing.js';

export const GrantBundle = [
  GrantMixin as Mixin,
  IntangibleMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin,
  ThingMixin as Mixin];
