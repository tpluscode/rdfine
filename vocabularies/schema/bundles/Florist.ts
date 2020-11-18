import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../lib/Store';
import { FloristMixin } from '../lib/Florist';

export const FloristBundle = [
  StoreMixin as Mixin,
  FloristMixin as Mixin];
