import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../lib/Intangible';
import { TripMixin } from '../lib/Trip';
import { PlaceMixin } from '../lib/Place';
import { ItemListMixin } from '../lib/ItemList';
import { OfferMixin } from '../lib/Offer';
import { DemandMixin } from '../lib/Demand';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';

export const TripBundle = [
  IntangibleMixin as Mixin,
  TripMixin as Mixin,
  PlaceMixin as Mixin,
  ItemListMixin as Mixin,
  OfferMixin as Mixin,
  DemandMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin];
