import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OfferMixin } from '../lib/Offer';
import { InviteMixin } from '../lib/Invite';

export const InviteBundle = [
  OfferMixin as Mixin,
  InviteMixin as Mixin];
