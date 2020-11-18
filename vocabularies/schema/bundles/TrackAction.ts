import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FindActionMixin } from '../lib/FindAction';
import { TrackActionMixin } from '../lib/TrackAction';

export const TrackActionBundle = [
  FindActionMixin as Mixin,
  TrackActionMixin as Mixin];
