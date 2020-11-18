import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MediaObjectMixin } from '../lib/MediaObject';
import { VideoObjectMixin } from '../lib/VideoObject';
import { PersonMixin } from '../lib/Person';
import { MusicGroupMixin } from '../lib/MusicGroup';
import { ImageObjectMixin } from '../lib/ImageObject';

export const VideoObjectBundle = [
  MediaObjectMixin as Mixin,
  VideoObjectMixin as Mixin,
  PersonMixin as Mixin,
  MusicGroupMixin as Mixin,
  ImageObjectMixin as Mixin];
