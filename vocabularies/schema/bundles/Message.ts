import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { MessageMixin } from '../Message';
import { ContactPointMixin } from '../ContactPoint';
import { OrganizationMixin } from '../Organization';
import { PersonMixin } from '../Person';
import { AudienceMixin } from '../Audience';

export const MessageBundle = [
  CreativeWorkMixin as Mixin,
  MessageMixin as Mixin,
  ContactPointMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin,
  AudienceMixin as Mixin];
