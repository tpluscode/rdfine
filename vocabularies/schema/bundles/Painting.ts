import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { PaintingMixin } from '../Painting';

export const PaintingBundle = [
  CreativeWorkMixin as Mixin,
  PaintingMixin as Mixin];
