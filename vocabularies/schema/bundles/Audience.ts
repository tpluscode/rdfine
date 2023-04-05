import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AdministrativeAreaMixin } from '../lib/AdministrativeArea';
import { AudienceMixin } from '../lib/Audience';
import { IntangibleMixin } from '../lib/Intangible';

export const AudienceBundle = [
  AdministrativeAreaMixin as Mixin,
  AudienceMixin as Mixin,
  IntangibleMixin as Mixin];
