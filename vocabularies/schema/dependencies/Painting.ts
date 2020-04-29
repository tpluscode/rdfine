import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { PaintingMixin } from '../Painting';

export const PaintingDependencies = [
  CreativeWorkMixin as Mixin,
  PaintingMixin as Mixin];
