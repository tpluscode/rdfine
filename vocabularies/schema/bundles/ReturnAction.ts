import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { TransferActionMixin } from '../lib/TransferAction';
import { ReturnActionMixin } from '../lib/ReturnAction';
import { OrganizationMixin } from '../lib/Organization';
import { AudienceMixin } from '../lib/Audience';
import { ContactPointMixin } from '../lib/ContactPoint';
import { PersonMixin } from '../lib/Person';

export const ReturnActionBundle = [
  TransferActionMixin as Mixin,
  ReturnActionMixin as Mixin,
  OrganizationMixin as Mixin,
  AudienceMixin as Mixin,
  ContactPointMixin as Mixin,
  PersonMixin as Mixin];
