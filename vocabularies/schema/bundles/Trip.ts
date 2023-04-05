import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DemandMixin } from '../lib/Demand';
import { IntangibleMixin } from '../lib/Intangible';
import { ItemListMixin } from '../lib/ItemList';
import { OfferMixin } from '../lib/Offer';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';
import { PlaceMixin } from '../lib/Place';
import { TripMixin } from '../lib/Trip';

export const TripBundle = [
  DemandMixin as Mixin,
  IntangibleMixin as Mixin,
  ItemListMixin as Mixin,
  OfferMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin,
  PlaceMixin as Mixin,
  TripMixin as Mixin];
