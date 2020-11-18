import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ItemMixin } from '../lib/Item';
import { PostMixin } from '../lib/Post';

export const PostBundle = [
  ItemMixin as Mixin,
  PostMixin as Mixin];
