import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FloristMixin } from '../lib/Florist';
import { StoreMixin } from '../lib/Store';

export const FloristBundle = [
  FloristMixin as Mixin,
  StoreMixin as Mixin];
