import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../lib/Intangible';
import { AudienceMixin } from '../lib/Audience';
import { AdministrativeAreaMixin } from '../lib/AdministrativeArea';

export const AudienceBundle = [
  IntangibleMixin as Mixin,
  AudienceMixin as Mixin,
  AdministrativeAreaMixin as Mixin];
