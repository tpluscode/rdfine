import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { TableReferenceMixin } from '../lib/TableReference';
import { ForeignKeyMixin } from '../lib/ForeignKey';

export const ForeignKeyBundle = [
  TableReferenceMixin as Mixin,
  ForeignKeyMixin as Mixin];
