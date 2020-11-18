import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { UserAccountMixin } from '../lib/UserAccount';
import { SpaceMixin } from '../lib/Space';
import { UsergroupMixin } from '../lib/Usergroup';

export const UsergroupBundle = [
  UserAccountMixin as Mixin,
  SpaceMixin as Mixin,
  UsergroupMixin as Mixin];
