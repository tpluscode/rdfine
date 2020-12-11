import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EditorMixin } from '../lib/Editor';
import { MultiEditorMixin } from '../lib/MultiEditor';

export const MultiEditorBundle = [
  EditorMixin as Mixin,
  MultiEditorMixin as Mixin];
