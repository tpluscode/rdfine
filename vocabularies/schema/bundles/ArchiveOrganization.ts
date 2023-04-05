import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ArchiveComponentMixin } from '../lib/ArchiveComponent';
import { ArchiveOrganizationMixin } from '../lib/ArchiveOrganization';
import { LocalBusinessMixin } from '../lib/LocalBusiness';

export const ArchiveOrganizationBundle = [
  ArchiveComponentMixin as Mixin,
  ArchiveOrganizationMixin as Mixin,
  LocalBusinessMixin as Mixin];
