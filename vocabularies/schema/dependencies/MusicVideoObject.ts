import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MediaObjectMixin } from '../MediaObject';
import { MusicVideoObjectMixin } from '../MusicVideoObject';

export const MusicVideoObjectDependencies = [
  MediaObjectMixin as Mixin,
  MusicVideoObjectMixin as Mixin];
