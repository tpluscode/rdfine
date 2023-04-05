import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ConfirmActionMixin } from '../lib/ConfirmAction';
import { InformActionMixin } from '../lib/InformAction';

export const ConfirmActionBundle = [
  ConfirmActionMixin as Mixin,
  InformActionMixin as Mixin];
