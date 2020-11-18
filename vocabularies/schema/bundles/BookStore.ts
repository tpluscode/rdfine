import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../lib/Store';
import { BookStoreMixin } from '../lib/BookStore';

export const BookStoreBundle = [
  StoreMixin as Mixin,
  BookStoreMixin as Mixin];
