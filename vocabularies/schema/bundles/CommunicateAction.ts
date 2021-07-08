import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { InteractActionMixin } from '../lib/InteractAction';
import { CommunicateActionMixin } from '../lib/CommunicateAction';
import { ThingMixin } from '../lib/Thing';
import { LanguageMixin } from '../lib/Language';
import { OrganizationMixin } from '../lib/Organization';
import { AudienceMixin } from '../lib/Audience';
import { ContactPointMixin } from '../lib/ContactPoint';
import { PersonMixin } from '../lib/Person';

export const CommunicateActionBundle = [
  InteractActionMixin as Mixin,
  CommunicateActionMixin as Mixin,
  ThingMixin as Mixin,
  LanguageMixin as Mixin,
  OrganizationMixin as Mixin,
  AudienceMixin as Mixin,
  ContactPointMixin as Mixin,
  PersonMixin as Mixin];
