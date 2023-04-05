import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CollectionMixin } from '../lib/Collection';
import { ImageMixin } from '../lib/Image';
import { LinkMixin } from '../lib/Link';
import { ObjectMixin } from '../lib/Object';

export const ObjectBundle = [
  CollectionMixin as Mixin,
  ImageMixin as Mixin,
  LinkMixin as Mixin,
  ObjectMixin as Mixin];
