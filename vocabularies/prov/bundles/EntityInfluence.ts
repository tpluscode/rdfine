import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { InfluenceMixin } from '../lib/Influence';
import { EntityMixin } from '../lib/Entity';
import { EntityInfluenceMixin } from '../lib/EntityInfluence';

export const EntityInfluenceBundle = [
  InfluenceMixin as Mixin,
  EntityMixin as Mixin,
  EntityInfluenceMixin as Mixin];
