import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DictionaryMixin } from '../lib/Dictionary';
import { EmptyCollectionMixin } from '../lib/EmptyCollection';
import { EmptyDictionaryMixin } from '../lib/EmptyDictionary';

export const EmptyDictionaryBundle = [
  DictionaryMixin as Mixin,
  EmptyCollectionMixin as Mixin,
  EmptyDictionaryMixin as Mixin];
