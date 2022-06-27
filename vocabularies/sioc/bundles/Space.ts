import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SpaceMixin } from '../lib/Space';
import { UsergroupMixin } from '../lib/Usergroup';

export const SpaceBundle = [
  SpaceMixin as Mixin,
  UsergroupMixin as Mixin];
