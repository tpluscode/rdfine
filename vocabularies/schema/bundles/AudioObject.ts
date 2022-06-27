import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AudioObjectMixin } from '../lib/AudioObject';
import { MediaObjectMixin } from '../lib/MediaObject';

export const AudioObjectBundle = [
  AudioObjectMixin as Mixin,
  MediaObjectMixin as Mixin];
