import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { csvw } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Csvw from '../index.js';

export interface TableReference<D extends RDF.DatasetCore = RDF.DatasetCore> extends rdfine.RdfResource<D> {
  columnReference: string | undefined;
  resource: string | undefined;
  schemaReference: string | undefined;
}

export function TableReferenceMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<TableReference> & RdfResourceCore> & Base {
  @rdfine.namespace(csvw)
  class TableReferenceClass extends Resource implements Partial<TableReference> {
    @rdfine.property.literal()
    columnReference: string | undefined;
    @rdfine.property.literal()
    resource: string | undefined;
    @rdfine.property.literal()
    schemaReference: string | undefined;
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

export const fromPointer = createFactory<TableReference>([TableReferenceMixin], { types: [csvw.TableReference] });
