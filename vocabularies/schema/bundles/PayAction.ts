import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { TradeActionMixin } from '../TradeAction';
import { PayActionMixin } from '../PayAction';
import { AudienceMixin } from '../Audience';
import { ContactPointMixin } from '../ContactPoint';
import { OrganizationMixin } from '../Organization';
import { PersonMixin } from '../Person';

export const PayActionBundle = [
  TradeActionMixin as Mixin,
  PayActionMixin as Mixin,
  AudienceMixin as Mixin,
  ContactPointMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin];
