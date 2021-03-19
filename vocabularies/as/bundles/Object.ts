import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CollectionMixin } from '../lib/Collection';
import { LinkMixin } from '../lib/Link';
import { ObjectMixin } from '../lib/Object';
import { ImageMixin } from '../lib/Image';

export const ObjectBundle = [
  CollectionMixin as Mixin,
  LinkMixin as Mixin,
  ObjectMixin as Mixin,
  ImageMixin as Mixin];
