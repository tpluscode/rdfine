import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AudiobookMixin } from '../lib/Audiobook';
import { AudioObjectMixin } from '../lib/AudioObject';
import { BookMixin } from '../lib/Book';
import { DurationMixin } from '../lib/Duration';
import { PersonMixin } from '../lib/Person';

export const AudiobookBundle = [
  AudiobookMixin as Mixin,
  AudioObjectMixin as Mixin,
  BookMixin as Mixin,
  DurationMixin as Mixin,
  PersonMixin as Mixin];
