import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DocumentMixin } from '../lib/Document';
import { AudioMixin } from '../lib/Audio';

export const AudioBundle = [
  DocumentMixin as Mixin,
  AudioMixin as Mixin];
