import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BookmarkActionMixin } from '../lib/BookmarkAction';
import { OrganizeActionMixin } from '../lib/OrganizeAction';

export const BookmarkActionBundle = [
  BookmarkActionMixin as Mixin,
  OrganizeActionMixin as Mixin];
