import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AudioMixin } from '../lib/Audio';
import { DocumentMixin } from '../lib/Document';

export const AudioBundle = [
  AudioMixin as Mixin,
  DocumentMixin as Mixin];
