import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ExtentMixin } from '../lib/Extent';
import { InstantiationExtentMixin } from '../lib/InstantiationExtent';

export const InstantiationExtentBundle = [
  ExtentMixin as Mixin,
  InstantiationExtentMixin as Mixin];
