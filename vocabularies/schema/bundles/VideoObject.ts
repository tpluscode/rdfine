import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ImageObjectMixin } from '../lib/ImageObject';
import { MediaObjectMixin } from '../lib/MediaObject';
import { MusicGroupMixin } from '../lib/MusicGroup';
import { PersonMixin } from '../lib/Person';
import { VideoObjectMixin } from '../lib/VideoObject';

export const VideoObjectBundle = [
  ImageObjectMixin as Mixin,
  MediaObjectMixin as Mixin,
  MusicGroupMixin as Mixin,
  PersonMixin as Mixin,
  VideoObjectMixin as Mixin];
