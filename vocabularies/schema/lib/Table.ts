import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { WebPageElementMixin } from './WebPageElement.js';

export interface Table<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.WebPageElement<D>, rdfine.RdfResource<D> {
}

export function TableMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Table & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class TableClass extends WebPageElementMixin(Resource) {
  }
  return TableClass as any
}

class TableImpl extends TableMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Table>) {
    super(arg, init)
    this.types.add(schema.Table)
  }

  static readonly __mixins: Mixin[] = [TableMixin, WebPageElementMixin];
}
TableMixin.appliesTo = schema.Table
TableMixin.Class = TableImpl

export const fromPointer = createFactory<Table>([WebPageElementMixin, TableMixin], { types: [schema.Table] });
