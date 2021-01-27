import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EntityMixin } from '../lib/Entity';
import { BundleMixin } from '../lib/Bundle';

export const BundleBundle = [
  EntityMixin as Mixin,
  BundleMixin as Mixin];
