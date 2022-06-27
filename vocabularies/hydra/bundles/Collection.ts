import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CollectionMixin } from '../lib/Collection';
import { MemberAssertionMixin } from '../lib/MemberAssertion';
import { ResourceMixin } from '../lib/Resource';

export const CollectionBundle = [
  CollectionMixin as Mixin,
  MemberAssertionMixin as Mixin,
  ResourceMixin as Mixin];
