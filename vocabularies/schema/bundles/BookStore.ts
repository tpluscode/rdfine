import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../Store';
import { BookStoreMixin } from '../BookStore';

export const BookStoreBundle = [
  StoreMixin as Mixin,
  BookStoreMixin as Mixin];
