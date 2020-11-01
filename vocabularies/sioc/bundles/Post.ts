import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ItemMixin } from '../Item';
import { PostMixin } from '../Post';

export const PostBundle = [
  ItemMixin as Mixin,
  PostMixin as Mixin];
