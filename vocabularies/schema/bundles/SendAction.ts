import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { TransferActionMixin } from '../TransferAction';
import { SendActionMixin } from '../SendAction';
import { AudienceMixin } from '../Audience';
import { ContactPointMixin } from '../ContactPoint';
import { OrganizationMixin } from '../Organization';
import { PersonMixin } from '../Person';

export const SendActionBundle = [
  TransferActionMixin as Mixin,
  SendActionMixin as Mixin,
  AudienceMixin as Mixin,
  ContactPointMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin];
