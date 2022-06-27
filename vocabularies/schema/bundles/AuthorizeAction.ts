import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AllocateActionMixin } from '../lib/AllocateAction';
import { AudienceMixin } from '../lib/Audience';
import { AuthorizeActionMixin } from '../lib/AuthorizeAction';
import { ContactPointMixin } from '../lib/ContactPoint';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';

export const AuthorizeActionBundle = [
  AllocateActionMixin as Mixin,
  AudienceMixin as Mixin,
  AuthorizeActionMixin as Mixin,
  ContactPointMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin];
