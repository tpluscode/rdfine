import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ApplicationMixin } from '../lib/Application';
import { ObjectMixin } from '../lib/Object';

export const ApplicationBundle = [
  ApplicationMixin as Mixin,
  ObjectMixin as Mixin];
