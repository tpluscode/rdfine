import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { UserAccountMixin } from '../UserAccount';
import { SpaceMixin } from '../Space';
import { UsergroupMixin } from '../Usergroup';

export const UsergroupBundle = [
  UserAccountMixin as Mixin,
  SpaceMixin as Mixin,
  UsergroupMixin as Mixin];
