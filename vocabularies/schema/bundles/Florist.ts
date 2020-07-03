import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../Store';
import { FloristMixin } from '../Florist';

export const FloristBundle = [
  StoreMixin as Mixin,
  FloristMixin as Mixin];
