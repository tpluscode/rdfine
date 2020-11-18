import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { TradeActionMixin } from '../lib/TradeAction';
import { RentActionMixin } from '../lib/RentAction';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';
import { RealEstateAgentMixin } from '../lib/RealEstateAgent';

export const RentActionBundle = [
  TradeActionMixin as Mixin,
  RentActionMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin,
  RealEstateAgentMixin as Mixin];
