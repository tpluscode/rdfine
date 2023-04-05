import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActionAccessSpecificationMixin } from '../lib/ActionAccessSpecification';
import { ActionMixin } from '../lib/Action';
import { ConsumeActionMixin } from '../lib/ConsumeAction';
import { OfferMixin } from '../lib/Offer';

export const ConsumeActionBundle = [
  ActionAccessSpecificationMixin as Mixin,
  ActionMixin as Mixin,
  ConsumeActionMixin as Mixin,
  OfferMixin as Mixin];
