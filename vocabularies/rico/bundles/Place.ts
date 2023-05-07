import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AgentMixin } from '../lib/Agent.js';
import { PhysicalLocationMixin } from '../lib/PhysicalLocation.js';
import { PlaceMixin } from '../lib/Place.js';
import { PlaceNameMixin } from '../lib/PlaceName.js';
import { PlaceRelationMixin } from '../lib/PlaceRelation.js';
import { PlaceTypeMixin } from '../lib/PlaceType.js';
import { ThingMixin } from '../lib/Thing.js';

export const PlaceBundle = [
  AgentMixin as Mixin,
  PhysicalLocationMixin as Mixin,
  PlaceMixin as Mixin,
  PlaceNameMixin as Mixin,
  PlaceRelationMixin as Mixin,
  PlaceTypeMixin as Mixin,
  ThingMixin as Mixin];
