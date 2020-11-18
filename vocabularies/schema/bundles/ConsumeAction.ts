import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActionMixin } from '../lib/Action';
import { ConsumeActionMixin } from '../lib/ConsumeAction';
import { ActionAccessSpecificationMixin } from '../lib/ActionAccessSpecification';
import { OfferMixin } from '../lib/Offer';

export const ConsumeActionBundle = [
  ActionMixin as Mixin,
  ConsumeActionMixin as Mixin,
  ActionAccessSpecificationMixin as Mixin,
  OfferMixin as Mixin];
