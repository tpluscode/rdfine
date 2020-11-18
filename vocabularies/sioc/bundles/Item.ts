import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ItemMixin } from '../lib/Item';
import { ContainerMixin } from '../lib/Container';
import { UserAccountMixin } from '../lib/UserAccount';

export const ItemBundle = [
  ItemMixin as Mixin,
  ContainerMixin as Mixin,
  UserAccountMixin as Mixin];
