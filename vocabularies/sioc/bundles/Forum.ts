import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ContainerMixin } from '../Container';
import { UserAccountMixin } from '../UserAccount';
import { ForumMixin } from '../Forum';

export const ForumBundle = [
  ContainerMixin as Mixin,
  UserAccountMixin as Mixin,
  ForumMixin as Mixin];
