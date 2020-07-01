import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActionMixin } from '../Action';
import { ConsumeActionMixin } from '../ConsumeAction';
import { ActionAccessSpecificationMixin } from '../ActionAccessSpecification';
import { OfferMixin } from '../Offer';

export const ConsumeActionBundle = [
  ActionMixin as Mixin,
  ConsumeActionMixin as Mixin,
  ActionAccessSpecificationMixin as Mixin,
  OfferMixin as Mixin];
