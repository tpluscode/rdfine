import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AdministrativeAreaMixin } from '../lib/AdministrativeArea';
import { AudienceMixin } from '../lib/Audience';
import { DurationMixin } from '../lib/Duration';
import { IntangibleMixin } from '../lib/Intangible';
import { OrganizationMixin } from '../lib/Organization';
import { PermitMixin } from '../lib/Permit';
import { ServiceMixin } from '../lib/Service';

export const PermitBundle = [
  AdministrativeAreaMixin as Mixin,
  AudienceMixin as Mixin,
  DurationMixin as Mixin,
  IntangibleMixin as Mixin,
  OrganizationMixin as Mixin,
  PermitMixin as Mixin,
  ServiceMixin as Mixin];
