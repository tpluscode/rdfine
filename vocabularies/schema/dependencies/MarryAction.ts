import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { InteractActionMixin } from '../InteractAction';
import { MarryActionMixin } from '../MarryAction';

export const MarryActionDependencies = [
  InteractActionMixin as Mixin,
  MarryActionMixin as Mixin];
