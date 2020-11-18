import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../lib/Intangible';
import { TripMixin } from '../lib/Trip';
import { ItemListMixin } from '../lib/ItemList';
import { PlaceMixin } from '../lib/Place';
import { DemandMixin } from '../lib/Demand';
import { OfferMixin } from '../lib/Offer';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';

export const TripBundle = [
  IntangibleMixin as Mixin,
  TripMixin as Mixin,
  ItemListMixin as Mixin,
  PlaceMixin as Mixin,
  DemandMixin as Mixin,
  OfferMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin];
