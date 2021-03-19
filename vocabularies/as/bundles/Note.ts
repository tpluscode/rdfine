import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ObjectMixin } from '../lib/Object';
import { NoteMixin } from '../lib/Note';

export const NoteBundle = [
  ObjectMixin as Mixin,
  NoteMixin as Mixin];
