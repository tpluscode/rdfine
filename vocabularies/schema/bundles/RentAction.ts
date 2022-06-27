import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';
import { RealEstateAgentMixin } from '../lib/RealEstateAgent';
import { RentActionMixin } from '../lib/RentAction';
import { TradeActionMixin } from '../lib/TradeAction';

export const RentActionBundle = [
  OrganizationMixin as Mixin,
  PersonMixin as Mixin,
  RealEstateAgentMixin as Mixin,
  RentActionMixin as Mixin,
  TradeActionMixin as Mixin];
