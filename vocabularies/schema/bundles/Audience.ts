import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../Intangible';
import { AudienceMixin } from '../Audience';
import { AdministrativeAreaMixin } from '../AdministrativeArea';

export const AudienceBundle = [
  IntangibleMixin as Mixin,
  AudienceMixin as Mixin,
  AdministrativeAreaMixin as Mixin];
