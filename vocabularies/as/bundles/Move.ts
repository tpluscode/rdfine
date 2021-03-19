import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActivityMixin } from '../lib/Activity';
import { MoveMixin } from '../lib/Move';

export const MoveBundle = [
  ActivityMixin as Mixin,
  MoveMixin as Mixin];
