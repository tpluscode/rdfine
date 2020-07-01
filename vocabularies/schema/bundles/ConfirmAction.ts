import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { InformActionMixin } from '../InformAction';
import { ConfirmActionMixin } from '../ConfirmAction';

export const ConfirmActionBundle = [
  InformActionMixin as Mixin,
  ConfirmActionMixin as Mixin];
