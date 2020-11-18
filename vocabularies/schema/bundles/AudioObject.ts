import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MediaObjectMixin } from '../lib/MediaObject';
import { AudioObjectMixin } from '../lib/AudioObject';

export const AudioObjectBundle = [
  MediaObjectMixin as Mixin,
  AudioObjectMixin as Mixin];
