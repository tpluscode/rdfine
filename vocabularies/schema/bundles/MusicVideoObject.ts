import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MediaObjectMixin } from '../MediaObject';
import { MusicVideoObjectMixin } from '../MusicVideoObject';

export const MusicVideoObjectBundle = [
  MediaObjectMixin as Mixin,
  MusicVideoObjectMixin as Mixin];
