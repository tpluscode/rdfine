import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ThingMixin } from '../Thing';
import { ActionMixin } from '../Action';
import { OrganizationMixin } from '../Organization';
import { PersonMixin } from '../Person';
import { PlaceMixin } from '../Place';
import { PostalAddressMixin } from '../PostalAddress';
import { EntryPointMixin } from '../EntryPoint';

export const ActionBundle = [
  ThingMixin as Mixin,
  ActionMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin,
  PlaceMixin as Mixin,
  PostalAddressMixin as Mixin,
  EntryPointMixin as Mixin];
