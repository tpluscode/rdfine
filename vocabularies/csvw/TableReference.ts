import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { csvw } from './lib/namespace';
import type * as Csvw from '.';

export interface TableReference extends RdfResource {
  columnReference: string;
  resource: string;
  schemaReference: string;
}

export default function TableReferenceMixin<Base extends Constructor>(Resource: Base) {
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
  constructor(arg: any) {
    super(arg)
    this.types.add(csvw.TableReference)
  }
}
TableReferenceMixin.shouldApply = (r: RdfResource) => r.types.has(csvw.TableReference)
TableReferenceMixin.Class = TableReferenceImpl
