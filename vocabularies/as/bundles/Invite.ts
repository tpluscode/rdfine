import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { InviteMixin } from '../lib/Invite';
import { OfferMixin } from '../lib/Offer';

export const InviteBundle = [
  InviteMixin as Mixin,
  OfferMixin as Mixin];
