import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { TradeActionMixin } from '../TradeAction';
import { RentActionMixin } from '../RentAction';
import { OrganizationMixin } from '../Organization';
import { PersonMixin } from '../Person';
import { RealEstateAgentMixin } from '../RealEstateAgent';

export const RentActionDependencies = [
  TradeActionMixin as Mixin,
  RentActionMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin,
  RealEstateAgentMixin as Mixin];
