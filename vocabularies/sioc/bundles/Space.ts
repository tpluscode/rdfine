import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { UsergroupMixin } from '../lib/Usergroup';
import { SpaceMixin } from '../lib/Space';

export const SpaceBundle = [
  UsergroupMixin as Mixin,
  SpaceMixin as Mixin];
