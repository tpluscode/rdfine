import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { WidgetMixin } from '../lib/Widget';
import { ViewerMixin } from '../lib/Viewer';

export const ViewerBundle = [
  WidgetMixin as Mixin,
  ViewerMixin as Mixin];
