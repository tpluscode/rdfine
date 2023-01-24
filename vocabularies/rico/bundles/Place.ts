import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AgentMixin } from '../lib/Agent';
import { PhysicalLocationMixin } from '../lib/PhysicalLocation';
import { PlaceMixin } from '../lib/Place';
import { PlaceNameMixin } from '../lib/PlaceName';
import { PlaceRelationMixin } from '../lib/PlaceRelation';
import { PlaceTypeMixin } from '../lib/PlaceType';
import { ThingMixin } from '../lib/Thing';

export const PlaceBundle = [
  AgentMixin as Mixin,
  PhysicalLocationMixin as Mixin,
  PlaceMixin as Mixin,
  PlaceNameMixin as Mixin,
  PlaceRelationMixin as Mixin,
  PlaceTypeMixin as Mixin,
  ThingMixin as Mixin];
