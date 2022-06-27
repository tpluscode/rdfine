import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ContainerMixin } from '../lib/Container';
import { ForumMixin } from '../lib/Forum';
import { UserAccountMixin } from '../lib/UserAccount';

export const ForumBundle = [
  ContainerMixin as Mixin,
  ForumMixin as Mixin,
  UserAccountMixin as Mixin];
