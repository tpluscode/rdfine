import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SpaceMixin } from '../lib/Space';
import { UserAccountMixin } from '../lib/UserAccount';
import { ContainerMixin } from '../lib/Container';
import { SiteMixin } from '../lib/Site';

export const SiteBundle = [
  SpaceMixin as Mixin,
  UserAccountMixin as Mixin,
  ContainerMixin as Mixin,
  SiteMixin as Mixin];
