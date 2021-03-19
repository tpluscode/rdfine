import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ObjectMixin } from '../lib/Object';
import { RelationshipMixin } from '../lib/Relationship';
import { LinkMixin } from '../lib/Link';

export const RelationshipBundle = [
  ObjectMixin as Mixin,
  RelationshipMixin as Mixin,
  LinkMixin as Mixin];
