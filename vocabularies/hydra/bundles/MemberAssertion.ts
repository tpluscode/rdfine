import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ClassMixin } from '../lib/Class';
import { MemberAssertionMixin } from '../lib/MemberAssertion';
import { ResourceMixin } from '../lib/Resource';

export const MemberAssertionBundle = [
  ClassMixin as Mixin,
  MemberAssertionMixin as Mixin,
  ResourceMixin as Mixin];
