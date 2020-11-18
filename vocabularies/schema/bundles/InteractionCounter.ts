import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StructuredValueMixin } from '../lib/StructuredValue';
import { InteractionCounterMixin } from '../lib/InteractionCounter';
import { SoftwareApplicationMixin } from '../lib/SoftwareApplication';
import { WebSiteMixin } from '../lib/WebSite';
import { ActionMixin } from '../lib/Action';

export const InteractionCounterBundle = [
  StructuredValueMixin as Mixin,
  InteractionCounterMixin as Mixin,
  SoftwareApplicationMixin as Mixin,
  WebSiteMixin as Mixin,
  ActionMixin as Mixin];
