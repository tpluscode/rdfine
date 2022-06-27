import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EntityInfluenceMixin } from '../lib/EntityInfluence';
import { EntityMixin } from '../lib/Entity';
import { InfluenceMixin } from '../lib/Influence';

export const EntityInfluenceBundle = [
  EntityInfluenceMixin as Mixin,
  EntityMixin as Mixin,
  InfluenceMixin as Mixin];
