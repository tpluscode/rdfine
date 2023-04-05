import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BookMixin } from '../lib/Book';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { PersonMixin } from '../lib/Person';

export const BookBundle = [
  BookMixin as Mixin,
  CreativeWorkMixin as Mixin,
  PersonMixin as Mixin];
