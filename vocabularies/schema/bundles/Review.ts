import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { ReviewMixin } from '../lib/Review';
import { ThingMixin } from '../lib/Thing';
import { ItemListMixin } from '../lib/ItemList';
import { WebContentMixin } from '../lib/WebContent';
import { ListItemMixin } from '../lib/ListItem';
import { RatingMixin } from '../lib/Rating';

export const ReviewBundle = [
  CreativeWorkMixin as Mixin,
  ReviewMixin as Mixin,
  ThingMixin as Mixin,
  ItemListMixin as Mixin,
  WebContentMixin as Mixin,
  ListItemMixin as Mixin,
  RatingMixin as Mixin];
