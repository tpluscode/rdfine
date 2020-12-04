import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { WebPageElementMixin } from './WebPageElement';

export interface Table<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.WebPageElement<D>, RdfResource<D> {
}

export function TableMixin<Base extends Constructor>(Resource: Base): Constructor<Table> & Base {
  @namespace(schema)
  class TableClass extends WebPageElementMixin(Resource) implements Table {
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
