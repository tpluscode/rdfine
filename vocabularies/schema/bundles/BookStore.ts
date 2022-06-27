import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BookStoreMixin } from '../lib/BookStore';
import { StoreMixin } from '../lib/Store';

export const BookStoreBundle = [
  BookStoreMixin as Mixin,
  StoreMixin as Mixin];
