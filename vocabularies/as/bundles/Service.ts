import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ObjectMixin } from '../lib/Object';
import { ServiceMixin } from '../lib/Service';

export const ServiceBundle = [
  ObjectMixin as Mixin,
  ServiceMixin as Mixin];
