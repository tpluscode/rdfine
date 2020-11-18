import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ItemMixin } from '../lib/Item';
import { SiteMixin } from '../lib/Site';
import { ContainerMixin } from '../lib/Container';
import { UserAccountMixin } from '../lib/UserAccount';

export const ContainerBundle = [
  ItemMixin as Mixin,
  SiteMixin as Mixin,
  ContainerMixin as Mixin,
  UserAccountMixin as Mixin];
