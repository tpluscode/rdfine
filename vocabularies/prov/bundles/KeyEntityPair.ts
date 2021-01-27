import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EntityMixin } from '../lib/Entity';
import { KeyEntityPairMixin } from '../lib/KeyEntityPair';

export const KeyEntityPairBundle = [
  EntityMixin as Mixin,
  KeyEntityPairMixin as Mixin];
