import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { InteractActionMixin } from '../InteractAction';
import { BefriendActionMixin } from '../BefriendAction';

export const BefriendActionDependencies = [
  InteractActionMixin as Mixin,
  BefriendActionMixin as Mixin];
