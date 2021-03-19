import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ObjectMixin } from '../lib/Object';
import { ApplicationMixin } from '../lib/Application';

export const ApplicationBundle = [
  ObjectMixin as Mixin,
  ApplicationMixin as Mixin];
