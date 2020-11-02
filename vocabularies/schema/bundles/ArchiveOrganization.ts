import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../LocalBusiness';
import { ArchiveOrganizationMixin } from '../ArchiveOrganization';
import { ArchiveComponentMixin } from '../ArchiveComponent';

export const ArchiveOrganizationBundle = [
  LocalBusinessMixin as Mixin,
  ArchiveOrganizationMixin as Mixin,
  ArchiveComponentMixin as Mixin];
