import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ResourceMixin } from '../lib/Resource';
import { MemberAssertionMixin } from '../lib/MemberAssertion';
import { ClassMixin } from '../lib/Class';

export const MemberAssertionBundle = [
  ResourceMixin as Mixin,
  MemberAssertionMixin as Mixin,
  ClassMixin as Mixin];
