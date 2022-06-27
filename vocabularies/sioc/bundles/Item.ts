import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ContainerMixin } from '../lib/Container';
import { ItemMixin } from '../lib/Item';
import { UserAccountMixin } from '../lib/UserAccount';

export const ItemBundle = [
  ContainerMixin as Mixin,
  ItemMixin as Mixin,
  UserAccountMixin as Mixin];
