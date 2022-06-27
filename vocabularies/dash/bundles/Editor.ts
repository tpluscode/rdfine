import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EditorMixin } from '../lib/Editor';
import { WidgetMixin } from '../lib/Widget';

export const EditorBundle = [
  EditorMixin as Mixin,
  WidgetMixin as Mixin];
