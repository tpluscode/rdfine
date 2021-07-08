import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { MessageMixin } from '../lib/Message';
import { OrganizationMixin } from '../lib/Organization';
import { ContactPointMixin } from '../lib/ContactPoint';
import { PersonMixin } from '../lib/Person';
import { AudienceMixin } from '../lib/Audience';

export const MessageBundle = [
  CreativeWorkMixin as Mixin,
  MessageMixin as Mixin,
  OrganizationMixin as Mixin,
  ContactPointMixin as Mixin,
  PersonMixin as Mixin,
  AudienceMixin as Mixin];
