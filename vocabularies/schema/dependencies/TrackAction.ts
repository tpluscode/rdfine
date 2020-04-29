import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FindActionMixin } from '../FindAction';
import { TrackActionMixin } from '../TrackAction';

export const TrackActionDependencies = [
  FindActionMixin as Mixin,
  TrackActionMixin as Mixin];
