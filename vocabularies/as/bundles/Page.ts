import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ObjectMixin } from '../lib/Object';
import { PageMixin } from '../lib/Page';

export const PageBundle = [
  ObjectMixin as Mixin,
  PageMixin as Mixin];
