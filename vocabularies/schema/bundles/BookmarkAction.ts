import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OrganizeActionMixin } from '../lib/OrganizeAction';
import { BookmarkActionMixin } from '../lib/BookmarkAction';

export const BookmarkActionBundle = [
  OrganizeActionMixin as Mixin,
  BookmarkActionMixin as Mixin];
