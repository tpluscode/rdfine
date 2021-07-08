import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MediaObjectMixin } from '../lib/MediaObject';
import { LegislationMixin } from '../lib/Legislation';
import { LegislationObjectMixin } from '../lib/LegislationObject';

export const LegislationObjectBundle = [
  MediaObjectMixin as Mixin,
  LegislationMixin as Mixin,
  LegislationObjectMixin as Mixin];
