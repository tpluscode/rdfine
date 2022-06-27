import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LinkMixin } from '../lib/Link';
import { ObjectMixin } from '../lib/Object';
import { RelationshipMixin } from '../lib/Relationship';

export const RelationshipBundle = [
  LinkMixin as Mixin,
  ObjectMixin as Mixin,
  RelationshipMixin as Mixin];
