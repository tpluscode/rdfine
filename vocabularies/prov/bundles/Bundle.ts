import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BundleMixin } from '../lib/Bundle';
import { EntityMixin } from '../lib/Entity';

export const BundleBundle = [
  BundleMixin as Mixin,
  EntityMixin as Mixin];
