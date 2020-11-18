import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { TransferActionMixin } from '../lib/TransferAction';
import { ReceiveActionMixin } from '../lib/ReceiveAction';
import { AudienceMixin } from '../lib/Audience';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';

export const ReceiveActionBundle = [
  TransferActionMixin as Mixin,
  ReceiveActionMixin as Mixin,
  AudienceMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin];
