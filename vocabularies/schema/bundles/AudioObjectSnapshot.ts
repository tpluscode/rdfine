import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AudioObjectMixin } from '../lib/AudioObject';
import { AudioObjectSnapshotMixin } from '../lib/AudioObjectSnapshot';

export const AudioObjectSnapshotBundle = [
  AudioObjectMixin as Mixin,
  AudioObjectSnapshotMixin as Mixin];
