import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ItemMixin } from '../Item';
import { SiteMixin } from '../Site';
import { ContainerMixin } from '../Container';
import { UserAccountMixin } from '../UserAccount';

export const ContainerBundle = [
  ItemMixin as Mixin,
  SiteMixin as Mixin,
  ContainerMixin as Mixin,
  UserAccountMixin as Mixin];
