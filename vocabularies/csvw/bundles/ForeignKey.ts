import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { TableReferenceMixin } from '../TableReference';
import { ForeignKeyMixin } from '../ForeignKey';

export const ForeignKeyBundle = [
  TableReferenceMixin as Mixin,
  ForeignKeyMixin as Mixin];
