import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../Intangible';
import { PermitMixin } from '../Permit';
import { OrganizationMixin } from '../Organization';
import { ServiceMixin } from '../Service';
import { AudienceMixin } from '../Audience';
import { DurationMixin } from '../Duration';
import { AdministrativeAreaMixin } from '../AdministrativeArea';

export const PermitDependencies = [
  IntangibleMixin as Mixin,
  PermitMixin as Mixin,
  OrganizationMixin as Mixin,
  ServiceMixin as Mixin,
  AudienceMixin as Mixin,
  DurationMixin as Mixin,
  AdministrativeAreaMixin as Mixin];
