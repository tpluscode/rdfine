import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LinkMixin } from '../lib/Link';
import { ObjectMixin } from '../lib/Object';

export const LinkBundle = [
  LinkMixin as Mixin,
  ObjectMixin as Mixin];
