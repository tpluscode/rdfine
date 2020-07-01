import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MediaObjectMixin } from '../MediaObject';
import { VideoObjectMixin } from '../VideoObject';
import { PersonMixin } from '../Person';
import { MusicGroupMixin } from '../MusicGroup';
import { ImageObjectMixin } from '../ImageObject';

export const VideoObjectBundle = [
  MediaObjectMixin as Mixin,
  VideoObjectMixin as Mixin,
  PersonMixin as Mixin,
  MusicGroupMixin as Mixin,
  ImageObjectMixin as Mixin];
