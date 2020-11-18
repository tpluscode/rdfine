import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ThingMixin } from '../lib/Thing';
import { ActionMixin } from '../lib/Action';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';
import { PlaceMixin } from '../lib/Place';
import { PostalAddressMixin } from '../lib/PostalAddress';
import { EntryPointMixin } from '../lib/EntryPoint';

export const ActionBundle = [
  ThingMixin as Mixin,
  ActionMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin,
  PlaceMixin as Mixin,
  PostalAddressMixin as Mixin,
  EntryPointMixin as Mixin];
