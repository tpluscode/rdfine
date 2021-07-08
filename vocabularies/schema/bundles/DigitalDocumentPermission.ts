import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../lib/Intangible';
import { DigitalDocumentPermissionMixin } from '../lib/DigitalDocumentPermission';
import { OrganizationMixin } from '../lib/Organization';
import { AudienceMixin } from '../lib/Audience';
import { ContactPointMixin } from '../lib/ContactPoint';
import { PersonMixin } from '../lib/Person';

export const DigitalDocumentPermissionBundle = [
  IntangibleMixin as Mixin,
  DigitalDocumentPermissionMixin as Mixin,
  OrganizationMixin as Mixin,
  AudienceMixin as Mixin,
  ContactPointMixin as Mixin,
  PersonMixin as Mixin];
