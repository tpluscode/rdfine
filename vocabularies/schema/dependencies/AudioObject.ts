import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MediaObjectMixin } from '../MediaObject';
import { AudioObjectMixin } from '../AudioObject';

export const AudioObjectDependencies = [
  MediaObjectMixin as Mixin,
  AudioObjectMixin as Mixin];
