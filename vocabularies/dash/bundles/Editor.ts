import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { WidgetMixin } from '../lib/Widget';
import { EditorMixin } from '../lib/Editor';

export const EditorBundle = [
  WidgetMixin as Mixin,
  EditorMixin as Mixin];
