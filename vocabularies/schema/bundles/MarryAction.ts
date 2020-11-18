import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { InteractActionMixin } from '../lib/InteractAction';
import { MarryActionMixin } from '../lib/MarryAction';

export const MarryActionBundle = [
  InteractActionMixin as Mixin,
  MarryActionMixin as Mixin];
