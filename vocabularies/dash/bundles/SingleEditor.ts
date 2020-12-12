import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EditorMixin } from '../lib/Editor';
import { SingleEditorMixin } from '../lib/SingleEditor';

export const SingleEditorBundle = [
  EditorMixin as Mixin,
  SingleEditorMixin as Mixin];
