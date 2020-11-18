import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MediaObjectMixin } from '../lib/MediaObject';
import { MusicVideoObjectMixin } from '../lib/MusicVideoObject';

export const MusicVideoObjectBundle = [
  MediaObjectMixin as Mixin,
  MusicVideoObjectMixin as Mixin];
