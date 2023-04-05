import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AudienceMixin } from '../lib/Audience';
import { CommunicateActionMixin } from '../lib/CommunicateAction';
import { ContactPointMixin } from '../lib/ContactPoint';
import { InteractActionMixin } from '../lib/InteractAction';
import { LanguageMixin } from '../lib/Language';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';
import { ThingMixin } from '../lib/Thing';

export const CommunicateActionBundle = [
  AudienceMixin as Mixin,
  CommunicateActionMixin as Mixin,
  ContactPointMixin as Mixin,
  InteractActionMixin as Mixin,
  LanguageMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin,
  ThingMixin as Mixin];
