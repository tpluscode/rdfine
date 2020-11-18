import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AudioObjectMixin } from '../lib/AudioObject';
import { BookMixin } from '../lib/Book';
import { AudiobookMixin } from '../lib/Audiobook';
import { DurationMixin } from '../lib/Duration';
import { PersonMixin } from '../lib/Person';

export const AudiobookBundle = [
  AudioObjectMixin as Mixin,
  BookMixin as Mixin,
  AudiobookMixin as Mixin,
  DurationMixin as Mixin,
  PersonMixin as Mixin];
