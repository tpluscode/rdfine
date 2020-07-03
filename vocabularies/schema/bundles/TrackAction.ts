import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FindActionMixin } from '../FindAction';
import { TrackActionMixin } from '../TrackAction';

export const TrackActionBundle = [
  FindActionMixin as Mixin,
  TrackActionMixin as Mixin];
