import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AudienceMixin } from '../lib/Audience';
import { ContactPointMixin } from '../lib/ContactPoint';
import { GiveActionMixin } from '../lib/GiveAction';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';
import { TransferActionMixin } from '../lib/TransferAction';

export const GiveActionBundle = [
  AudienceMixin as Mixin,
  ContactPointMixin as Mixin,
  GiveActionMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin,
  TransferActionMixin as Mixin];
