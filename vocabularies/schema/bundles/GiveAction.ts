import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { TransferActionMixin } from '../TransferAction';
import { GiveActionMixin } from '../GiveAction';
import { AudienceMixin } from '../Audience';
import { ContactPointMixin } from '../ContactPoint';
import { OrganizationMixin } from '../Organization';
import { PersonMixin } from '../Person';

export const GiveActionBundle = [
  TransferActionMixin as Mixin,
  GiveActionMixin as Mixin,
  AudienceMixin as Mixin,
  ContactPointMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin];
