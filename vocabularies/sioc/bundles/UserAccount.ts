import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SiteMixin } from '../lib/Site';
import { UserAccountMixin } from '../lib/UserAccount';
import { UsergroupMixin } from '../lib/Usergroup';
import { ForumMixin } from '../lib/Forum';
import { ContainerMixin } from '../lib/Container';

export const UserAccountBundle = [
  SiteMixin as Mixin,
  UserAccountMixin as Mixin,
  UsergroupMixin as Mixin,
  ForumMixin as Mixin,
  ContainerMixin as Mixin];
