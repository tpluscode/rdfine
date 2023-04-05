import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { ItemListMixin } from '../lib/ItemList';
import { ListItemMixin } from '../lib/ListItem';
import { RatingMixin } from '../lib/Rating';
import { ReviewMixin } from '../lib/Review';
import { ThingMixin } from '../lib/Thing';
import { WebContentMixin } from '../lib/WebContent';

export const ReviewBundle = [
  CreativeWorkMixin as Mixin,
  ItemListMixin as Mixin,
  ListItemMixin as Mixin,
  RatingMixin as Mixin,
  ReviewMixin as Mixin,
  ThingMixin as Mixin,
  WebContentMixin as Mixin];
