import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EducationEventMixin } from '../lib/EducationEvent';
import { EventMixin } from '../lib/Event';

export const EducationEventBundle = [
  EducationEventMixin as Mixin,
  EventMixin as Mixin];
