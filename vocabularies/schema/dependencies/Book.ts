import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { BookMixin } from '../Book';
import { PersonMixin } from '../Person';

export const BookDependencies = [
  CreativeWorkMixin as Mixin,
  BookMixin as Mixin,
  PersonMixin as Mixin];
