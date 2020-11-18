import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LegislationMixin } from '../lib/Legislation';
import { MediaObjectMixin } from '../lib/MediaObject';
import { LegislationObjectMixin } from '../lib/LegislationObject';

export const LegislationObjectBundle = [
  LegislationMixin as Mixin,
  MediaObjectMixin as Mixin,
  LegislationObjectMixin as Mixin];
