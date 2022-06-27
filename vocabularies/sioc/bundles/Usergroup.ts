import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SpaceMixin } from '../lib/Space';
import { UserAccountMixin } from '../lib/UserAccount';
import { UsergroupMixin } from '../lib/Usergroup';

export const UsergroupBundle = [
  SpaceMixin as Mixin,
  UserAccountMixin as Mixin,
  UsergroupMixin as Mixin];
