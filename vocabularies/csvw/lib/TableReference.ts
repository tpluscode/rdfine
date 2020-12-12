import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { csvw } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Csvw from '..';

export interface TableReference<D extends RDF.DatasetCore = RDF.DatasetCore> extends RdfResource<D> {
  columnReference: string | undefined;
  resource: string | undefined;
  schemaReference: string | undefined;
}

export function TableReferenceMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<TableReference> & RdfResourceCore> & Base {
  @namespace(csvw)
  class TableReferenceClass extends Resource implements Partial<TableReference> {
    @property.literal()
    columnReference: string | undefined;
    @property.literal()
    resource: string | undefined;
    @property.literal()
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
