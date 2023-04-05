import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { InstantaneousEventMixin } from '../lib/InstantaneousEvent';
import { LocationMixin } from '../lib/Location';
import { RoleMixin } from '../lib/Role';

export const InstantaneousEventBundle = [
  InstantaneousEventMixin as Mixin,
  LocationMixin as Mixin,
  RoleMixin as Mixin];
