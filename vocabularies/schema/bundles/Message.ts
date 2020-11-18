import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { MessageMixin } from '../lib/Message';
import { ContactPointMixin } from '../lib/ContactPoint';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';
import { AudienceMixin } from '../lib/Audience';

export const MessageBundle = [
  CreativeWorkMixin as Mixin,
  MessageMixin as Mixin,
  ContactPointMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin,
  AudienceMixin as Mixin];
