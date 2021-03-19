import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AcceptMixin } from '../lib/Accept';
import { TentativeAcceptMixin } from '../lib/TentativeAccept';

export const TentativeAcceptBundle = [
  AcceptMixin as Mixin,
  TentativeAcceptMixin as Mixin];
