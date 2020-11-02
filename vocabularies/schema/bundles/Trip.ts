import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../Intangible';
import { TripMixin } from '../Trip';
import { ItemListMixin } from '../ItemList';
import { PlaceMixin } from '../Place';
import { DemandMixin } from '../Demand';
import { OfferMixin } from '../Offer';
import { OrganizationMixin } from '../Organization';
import { PersonMixin } from '../Person';

export const TripBundle = [
  IntangibleMixin as Mixin,
  TripMixin as Mixin,
  ItemListMixin as Mixin,
  PlaceMixin as Mixin,
  DemandMixin as Mixin,
  OfferMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin];
