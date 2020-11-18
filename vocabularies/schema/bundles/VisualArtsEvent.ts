import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EventMixin } from '../lib/Event';
import { VisualArtsEventMixin } from '../lib/VisualArtsEvent';

export const VisualArtsEventBundle = [
  EventMixin as Mixin,
  VisualArtsEventMixin as Mixin];
