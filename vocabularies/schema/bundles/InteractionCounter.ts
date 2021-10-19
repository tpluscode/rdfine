import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StructuredValueMixin } from '../lib/StructuredValue';
import { InteractionCounterMixin } from '../lib/InteractionCounter';
import { SoftwareApplicationMixin } from '../lib/SoftwareApplication';
import { WebSiteMixin } from '../lib/WebSite';
import { ActionMixin } from '../lib/Action';
import { PlaceMixin } from '../lib/Place';
import { PostalAddressMixin } from '../lib/PostalAddress';

export const InteractionCounterBundle = [
  StructuredValueMixin as Mixin,
  InteractionCounterMixin as Mixin,
  SoftwareApplicationMixin as Mixin,
  WebSiteMixin as Mixin,
  ActionMixin as Mixin,
  PlaceMixin as Mixin,
  PostalAddressMixin as Mixin];
