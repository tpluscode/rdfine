import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CommunicateActionMixin } from '../CommunicateAction';
import { ShareActionMixin } from '../ShareAction';

export const ShareActionBundle = [
  CommunicateActionMixin as Mixin,
  ShareActionMixin as Mixin];
