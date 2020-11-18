import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EventMixin } from '../lib/Event';
import { EducationEventMixin } from '../lib/EducationEvent';

export const EducationEventBundle = [
  EventMixin as Mixin,
  EducationEventMixin as Mixin];
