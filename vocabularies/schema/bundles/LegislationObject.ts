import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LegislationMixin } from '../Legislation';
import { MediaObjectMixin } from '../MediaObject';
import { LegislationObjectMixin } from '../LegislationObject';

export const LegislationObjectBundle = [
  LegislationMixin as Mixin,
  MediaObjectMixin as Mixin,
  LegislationObjectMixin as Mixin];
