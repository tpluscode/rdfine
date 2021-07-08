import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { TradeActionMixin } from '../lib/TradeAction';
import { PayActionMixin } from '../lib/PayAction';
import { OrganizationMixin } from '../lib/Organization';
import { AudienceMixin } from '../lib/Audience';
import { ContactPointMixin } from '../lib/ContactPoint';
import { PersonMixin } from '../lib/Person';

export const PayActionBundle = [
  TradeActionMixin as Mixin,
  PayActionMixin as Mixin,
  OrganizationMixin as Mixin,
  AudienceMixin as Mixin,
  ContactPointMixin as Mixin,
  PersonMixin as Mixin];
