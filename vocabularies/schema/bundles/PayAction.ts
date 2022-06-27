import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AudienceMixin } from '../lib/Audience';
import { ContactPointMixin } from '../lib/ContactPoint';
import { OrganizationMixin } from '../lib/Organization';
import { PayActionMixin } from '../lib/PayAction';
import { PersonMixin } from '../lib/Person';
import { TradeActionMixin } from '../lib/TradeAction';

export const PayActionBundle = [
  AudienceMixin as Mixin,
  ContactPointMixin as Mixin,
  OrganizationMixin as Mixin,
  PayActionMixin as Mixin,
  PersonMixin as Mixin,
  TradeActionMixin as Mixin];
