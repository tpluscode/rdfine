import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../lib/Intangible';
import { PermitMixin } from '../lib/Permit';
import { OrganizationMixin } from '../lib/Organization';
import { ServiceMixin } from '../lib/Service';
import { AudienceMixin } from '../lib/Audience';
import { DurationMixin } from '../lib/Duration';
import { AdministrativeAreaMixin } from '../lib/AdministrativeArea';

export const PermitBundle = [
  IntangibleMixin as Mixin,
  PermitMixin as Mixin,
  OrganizationMixin as Mixin,
  ServiceMixin as Mixin,
  AudienceMixin as Mixin,
  DurationMixin as Mixin,
  AdministrativeAreaMixin as Mixin];
