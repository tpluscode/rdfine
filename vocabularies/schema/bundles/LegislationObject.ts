import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LegislationMixin } from '../lib/Legislation';
import { LegislationObjectMixin } from '../lib/LegislationObject';
import { MediaObjectMixin } from '../lib/MediaObject';

export const LegislationObjectBundle = [
  LegislationMixin as Mixin,
  LegislationObjectMixin as Mixin,
  MediaObjectMixin as Mixin];
