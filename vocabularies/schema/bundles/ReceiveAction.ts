import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AudienceMixin } from '../lib/Audience';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';
import { ReceiveActionMixin } from '../lib/ReceiveAction';
import { TransferActionMixin } from '../lib/TransferAction';

export const ReceiveActionBundle = [
  AudienceMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin,
  ReceiveActionMixin as Mixin,
  TransferActionMixin as Mixin];
