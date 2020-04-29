import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StructuredValueMixin } from '../StructuredValue';
import { InteractionCounterMixin } from '../InteractionCounter';
import { SoftwareApplicationMixin } from '../SoftwareApplication';
import { WebSiteMixin } from '../WebSite';
import { ActionMixin } from '../Action';

export const InteractionCounterDependencies = [
  StructuredValueMixin as Mixin,
  InteractionCounterMixin as Mixin,
  SoftwareApplicationMixin as Mixin,
  WebSiteMixin as Mixin,
  ActionMixin as Mixin];
