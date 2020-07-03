import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EventMixin } from '../Event';
import { VisualArtsEventMixin } from '../VisualArtsEvent';

export const VisualArtsEventBundle = [
  EventMixin as Mixin,
  VisualArtsEventMixin as Mixin];
