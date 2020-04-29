import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CommunicateActionMixin } from '../CommunicateAction';
import { ShareActionMixin } from '../ShareAction';

export const ShareActionDependencies = [
  CommunicateActionMixin as Mixin,
  ShareActionMixin as Mixin];
