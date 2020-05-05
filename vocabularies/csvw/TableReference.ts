import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { csvw } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Csvw from '.';

export interface TableReference extends RdfResource {
  columnReference: string;
  resource: string;
  schemaReference: string;
}

export function TableReferenceMixin<Base extends Constructor>(Resource: Base) {
  @namespace(csvw)
  class TableReferenceClass extends Resource implements TableReference {
    @property.literal()
    columnReference!: string;
    @property.literal()
    resource!: string;
    @property.literal()
    schemaReference!: string;
  }
  return TableReferenceClass
}

class TableReferenceImpl extends TableReferenceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<TableReference>) {
    super(arg, init)
    this.types.add(csvw.TableReference)
  }

  static readonly __mixins: Mixin[] = [TableReferenceMixin];
}
TableReferenceMixin.appliesTo = csvw.TableReference
TableReferenceMixin.Class = TableReferenceImpl
