import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OrganizeActionMixin } from '../OrganizeAction';
import { BookmarkActionMixin } from '../BookmarkAction';

export const BookmarkActionBundle = [
  OrganizeActionMixin as Mixin,
  BookmarkActionMixin as Mixin];
