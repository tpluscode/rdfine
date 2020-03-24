import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import WebPageElementMixin from './WebPageElement';

export interface Table extends Schema.WebPageElement, RdfResource {
}

export default function TableMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class TableClass extends WebPageElementMixin(Resource) implements Table {
  }
  return TableClass
}

class TableImpl extends TableMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<Table>) {
    super(arg)
    this.types.add(schema.Table)
    initializeProperties(this, init)
  }
}
TableMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Table)
TableMixin.Class = TableImpl
