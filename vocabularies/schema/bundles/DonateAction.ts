import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AudienceMixin } from '../lib/Audience';
import { ContactPointMixin } from '../lib/ContactPoint';
import { DonateActionMixin } from '../lib/DonateAction';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';
import { TradeActionMixin } from '../lib/TradeAction';

export const DonateActionBundle = [
  AudienceMixin as Mixin,
  ContactPointMixin as Mixin,
  DonateActionMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin,
  TradeActionMixin as Mixin];
