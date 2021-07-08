import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { TransferActionMixin } from '../lib/TransferAction';
import { ReceiveActionMixin } from '../lib/ReceiveAction';
import { OrganizationMixin } from '../lib/Organization';
import { AudienceMixin } from '../lib/Audience';
import { PersonMixin } from '../lib/Person';

export const ReceiveActionBundle = [
  TransferActionMixin as Mixin,
  ReceiveActionMixin as Mixin,
  OrganizationMixin as Mixin,
  AudienceMixin as Mixin,
  PersonMixin as Mixin];
