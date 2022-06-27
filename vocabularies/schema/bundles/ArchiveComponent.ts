import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ArchiveComponentMixin } from '../lib/ArchiveComponent';
import { ArchiveOrganizationMixin } from '../lib/ArchiveOrganization';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { PlaceMixin } from '../lib/Place';
import { PostalAddressMixin } from '../lib/PostalAddress';

export const ArchiveComponentBundle = [
  ArchiveComponentMixin as Mixin,
  ArchiveOrganizationMixin as Mixin,
  CreativeWorkMixin as Mixin,
  PlaceMixin as Mixin,
  PostalAddressMixin as Mixin];
