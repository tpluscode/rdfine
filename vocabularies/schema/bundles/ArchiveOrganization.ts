import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../lib/LocalBusiness';
import { ArchiveOrganizationMixin } from '../lib/ArchiveOrganization';
import { ArchiveComponentMixin } from '../lib/ArchiveComponent';

export const ArchiveOrganizationBundle = [
  LocalBusinessMixin as Mixin,
  ArchiveOrganizationMixin as Mixin,
  ArchiveComponentMixin as Mixin];
