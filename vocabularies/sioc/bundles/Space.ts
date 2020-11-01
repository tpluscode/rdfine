import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { UsergroupMixin } from '../Usergroup';
import { SpaceMixin } from '../Space';

export const SpaceBundle = [
  UsergroupMixin as Mixin,
  SpaceMixin as Mixin];
