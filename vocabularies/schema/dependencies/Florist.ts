import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../Store';
import { FloristMixin } from '../Florist';

export const FloristDependencies = [
  StoreMixin as Mixin,
  FloristMixin as Mixin];
