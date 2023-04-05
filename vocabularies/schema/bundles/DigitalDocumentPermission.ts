import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AudienceMixin } from '../lib/Audience';
import { ContactPointMixin } from '../lib/ContactPoint';
import { DigitalDocumentPermissionMixin } from '../lib/DigitalDocumentPermission';
import { IntangibleMixin } from '../lib/Intangible';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';

export const DigitalDocumentPermissionBundle = [
  AudienceMixin as Mixin,
  ContactPointMixin as Mixin,
  DigitalDocumentPermissionMixin as Mixin,
  IntangibleMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin];
