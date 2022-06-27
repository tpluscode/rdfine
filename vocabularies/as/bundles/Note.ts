import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { NoteMixin } from '../lib/Note';
import { ObjectMixin } from '../lib/Object';

export const NoteBundle = [
  NoteMixin as Mixin,
  ObjectMixin as Mixin];
