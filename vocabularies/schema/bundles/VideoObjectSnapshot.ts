import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { VideoObjectMixin } from '../lib/VideoObject';
import { VideoObjectSnapshotMixin } from '../lib/VideoObjectSnapshot';

export const VideoObjectSnapshotBundle = [
  VideoObjectMixin as Mixin,
  VideoObjectSnapshotMixin as Mixin];
