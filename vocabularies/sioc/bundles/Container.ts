import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ContainerMixin } from '../lib/Container';
import { ItemMixin } from '../lib/Item';
import { SiteMixin } from '../lib/Site';
import { UserAccountMixin } from '../lib/UserAccount';

export const ContainerBundle = [
  ContainerMixin as Mixin,
  ItemMixin as Mixin,
  SiteMixin as Mixin,
  UserAccountMixin as Mixin];
