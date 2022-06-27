import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActionMixin } from '../lib/Action';
import { InteractionCounterMixin } from '../lib/InteractionCounter';
import { PlaceMixin } from '../lib/Place';
import { PostalAddressMixin } from '../lib/PostalAddress';
import { SoftwareApplicationMixin } from '../lib/SoftwareApplication';
import { StructuredValueMixin } from '../lib/StructuredValue';
import { WebSiteMixin } from '../lib/WebSite';

export const InteractionCounterBundle = [
  ActionMixin as Mixin,
  InteractionCounterMixin as Mixin,
  PlaceMixin as Mixin,
  PostalAddressMixin as Mixin,
  SoftwareApplicationMixin as Mixin,
  StructuredValueMixin as Mixin,
  WebSiteMixin as Mixin];
