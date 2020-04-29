import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EventMixin } from '../Event';
import { EducationEventMixin } from '../EducationEvent';

export const EducationEventDependencies = [
  EventMixin as Mixin,
  EducationEventMixin as Mixin];
