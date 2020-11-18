import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EventMixin } from '../lib/Event';
import { SaleEventMixin } from '../lib/SaleEvent';

export const SaleEventBundle = [
  EventMixin as Mixin,
  SaleEventMixin as Mixin];
