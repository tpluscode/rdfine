import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ContainerMixin } from '../lib/Container';
import { SiteMixin } from '../lib/Site';
import { SpaceMixin } from '../lib/Space';
import { UserAccountMixin } from '../lib/UserAccount';

export const SiteBundle = [
  ContainerMixin as Mixin,
  SiteMixin as Mixin,
  SpaceMixin as Mixin,
  UserAccountMixin as Mixin];
