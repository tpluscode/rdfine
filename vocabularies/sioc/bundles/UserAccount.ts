import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SiteMixin } from '../Site';
import { UserAccountMixin } from '../UserAccount';
import { UsergroupMixin } from '../Usergroup';
import { ForumMixin } from '../Forum';
import { ContainerMixin } from '../Container';

export const UserAccountBundle = [
  SiteMixin as Mixin,
  UserAccountMixin as Mixin,
  UsergroupMixin as Mixin,
  ForumMixin as Mixin,
  ContainerMixin as Mixin];
