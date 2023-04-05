import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ContainerMixin } from '../lib/Container';
import { ForumMixin } from '../lib/Forum';
import { SiteMixin } from '../lib/Site';
import { UserAccountMixin } from '../lib/UserAccount';
import { UsergroupMixin } from '../lib/Usergroup';

export const UserAccountBundle = [
  ContainerMixin as Mixin,
  ForumMixin as Mixin,
  SiteMixin as Mixin,
  UserAccountMixin as Mixin,
  UsergroupMixin as Mixin];
