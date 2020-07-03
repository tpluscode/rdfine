import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { InteractActionMixin } from '../InteractAction';
import { CommunicateActionMixin } from '../CommunicateAction';
import { ThingMixin } from '../Thing';
import { LanguageMixin } from '../Language';
import { AudienceMixin } from '../Audience';
import { ContactPointMixin } from '../ContactPoint';
import { OrganizationMixin } from '../Organization';
import { PersonMixin } from '../Person';

export const CommunicateActionBundle = [
  InteractActionMixin as Mixin,
  CommunicateActionMixin as Mixin,
  ThingMixin as Mixin,
  LanguageMixin as Mixin,
  AudienceMixin as Mixin,
  ContactPointMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin];
