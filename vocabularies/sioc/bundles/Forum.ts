import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ContainerMixin } from '../lib/Container';
import { UserAccountMixin } from '../lib/UserAccount';
import { ForumMixin } from '../lib/Forum';

export const ForumBundle = [
  ContainerMixin as Mixin,
  UserAccountMixin as Mixin,
  ForumMixin as Mixin];
