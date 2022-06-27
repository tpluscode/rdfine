import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ViewerMixin } from '../lib/Viewer';
import { WidgetMixin } from '../lib/Widget';

export const ViewerBundle = [
  ViewerMixin as Mixin,
  WidgetMixin as Mixin];
