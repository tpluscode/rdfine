import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { WebPageElementMixin } from './WebPageElement';

export interface Table extends Schema.WebPageElement, RdfResource {
}

export function TableMixin<Base extends Constructor>(Resource: Base) {
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
