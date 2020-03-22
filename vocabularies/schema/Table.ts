import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Table)
  }
}
TableMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Table)
TableMixin.Class = TableImpl
