import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EventMixin } from '../Event';
import { SaleEventMixin } from '../SaleEvent';

export const SaleEventBundle = [
  EventMixin as Mixin,
  SaleEventMixin as Mixin];
