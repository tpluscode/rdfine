import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CommunicateActionMixin } from '../lib/CommunicateAction';
import { ShareActionMixin } from '../lib/ShareAction';

export const ShareActionBundle = [
  CommunicateActionMixin as Mixin,
  ShareActionMixin as Mixin];
