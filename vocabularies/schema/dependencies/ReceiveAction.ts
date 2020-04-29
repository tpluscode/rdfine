import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { TransferActionMixin } from '../TransferAction';
import { ReceiveActionMixin } from '../ReceiveAction';
import { AudienceMixin } from '../Audience';
import { OrganizationMixin } from '../Organization';
import { PersonMixin } from '../Person';

export const ReceiveActionDependencies = [
  TransferActionMixin as Mixin,
  ReceiveActionMixin as Mixin,
  AudienceMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin];
