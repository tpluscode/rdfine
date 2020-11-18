import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { BookMixin } from '../lib/Book';
import { PersonMixin } from '../lib/Person';

export const BookBundle = [
  CreativeWorkMixin as Mixin,
  BookMixin as Mixin,
  PersonMixin as Mixin];
