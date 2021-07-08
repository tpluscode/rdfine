import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AllocateActionMixin } from '../lib/AllocateAction';
import { AuthorizeActionMixin } from '../lib/AuthorizeAction';
import { OrganizationMixin } from '../lib/Organization';
import { AudienceMixin } from '../lib/Audience';
import { ContactPointMixin } from '../lib/ContactPoint';
import { PersonMixin } from '../lib/Person';

export const AuthorizeActionBundle = [
  AllocateActionMixin as Mixin,
  AuthorizeActionMixin as Mixin,
  OrganizationMixin as Mixin,
  AudienceMixin as Mixin,
  ContactPointMixin as Mixin,
  PersonMixin as Mixin];
