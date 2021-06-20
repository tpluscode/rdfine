import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { WebPageElementMixin } from './WebPageElement';

export interface Table<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.WebPageElement<D>, RdfResource<D> {
}

export function TableMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Table> & RdfResourceCore> & Base {
  @namespace(schema)
  class TableClass extends WebPageElementMixin(Resource) implements Partial<Table> {
  }
  return TableClass
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
