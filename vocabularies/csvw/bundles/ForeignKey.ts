import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ForeignKeyMixin } from '../lib/ForeignKey';
import { TableReferenceMixin } from '../lib/TableReference';

export const ForeignKeyBundle = [
  ForeignKeyMixin as Mixin,
  TableReferenceMixin as Mixin];
