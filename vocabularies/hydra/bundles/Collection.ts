import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ResourceMixin } from '../lib/Resource';
import { MemberAssertionMixin } from '../lib/MemberAssertion';
import { CollectionMixin } from '../lib/Collection';

export const CollectionBundle = [
  ResourceMixin as Mixin,
  MemberAssertionMixin as Mixin,
  CollectionMixin as Mixin];
