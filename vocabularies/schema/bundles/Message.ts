import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AudienceMixin } from '../lib/Audience';
import { ContactPointMixin } from '../lib/ContactPoint';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { MessageMixin } from '../lib/Message';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';

export const MessageBundle = [
  AudienceMixin as Mixin,
  ContactPointMixin as Mixin,
  CreativeWorkMixin as Mixin,
  MessageMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin];
