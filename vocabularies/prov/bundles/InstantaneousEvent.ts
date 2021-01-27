import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocationMixin } from '../lib/Location';
import { RoleMixin } from '../lib/Role';
import { InstantaneousEventMixin } from '../lib/InstantaneousEvent';

export const InstantaneousEventBundle = [
  LocationMixin as Mixin,
  RoleMixin as Mixin,
  InstantaneousEventMixin as Mixin];
