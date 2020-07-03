import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AllocateActionMixin } from '../AllocateAction';
import { AuthorizeActionMixin } from '../AuthorizeAction';
import { AudienceMixin } from '../Audience';
import { ContactPointMixin } from '../ContactPoint';
import { OrganizationMixin } from '../Organization';
import { PersonMixin } from '../Person';

export const AuthorizeActionBundle = [
  AllocateActionMixin as Mixin,
  AuthorizeActionMixin as Mixin,
  AudienceMixin as Mixin,
  ContactPointMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin];
