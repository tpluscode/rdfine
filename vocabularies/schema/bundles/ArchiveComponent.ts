import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { ArchiveComponentMixin } from '../lib/ArchiveComponent';
import { ArchiveOrganizationMixin } from '../lib/ArchiveOrganization';
import { PlaceMixin } from '../lib/Place';
import { PostalAddressMixin } from '../lib/PostalAddress';

export const ArchiveComponentBundle = [
  CreativeWorkMixin as Mixin,
  ArchiveComponentMixin as Mixin,
  ArchiveOrganizationMixin as Mixin,
  PlaceMixin as Mixin,
  PostalAddressMixin as Mixin];
