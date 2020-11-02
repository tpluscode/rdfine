import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { ArchiveComponentMixin } from '../ArchiveComponent';
import { ArchiveOrganizationMixin } from '../ArchiveOrganization';
import { PlaceMixin } from '../Place';
import { PostalAddressMixin } from '../PostalAddress';

export const ArchiveComponentBundle = [
  CreativeWorkMixin as Mixin,
  ArchiveComponentMixin as Mixin,
  ArchiveOrganizationMixin as Mixin,
  PlaceMixin as Mixin,
  PostalAddressMixin as Mixin];
