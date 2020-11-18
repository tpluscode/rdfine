import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { TradeActionMixin } from '../lib/TradeAction';
import { TipActionMixin } from '../lib/TipAction';
import { AudienceMixin } from '../lib/Audience';
import { ContactPointMixin } from '../lib/ContactPoint';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';

export const TipActionBundle = [
  TradeActionMixin as Mixin,
  TipActionMixin as Mixin,
  AudienceMixin as Mixin,
  ContactPointMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin];
