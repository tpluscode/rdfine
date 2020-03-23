import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import UseActionMixin from './UseAction';

export interface WearAction extends Schema.UseAction, RdfResource {
}

export default function WearActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class WearActionClass extends UseActionMixin(Resource) implements WearAction {
  }
  return WearActionClass
}

class WearActionImpl extends WearActionMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.WearAction)
  }
}
WearActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.WearAction)
WearActionMixin.Class = WearActionImpl
