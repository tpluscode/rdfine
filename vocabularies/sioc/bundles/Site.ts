import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SpaceMixin } from '../Space';
import { UserAccountMixin } from '../UserAccount';
import { ContainerMixin } from '../Container';
import { SiteMixin } from '../Site';

export const SiteBundle = [
  SpaceMixin as Mixin,
  UserAccountMixin as Mixin,
  ContainerMixin as Mixin,
  SiteMixin as Mixin];
