import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import ConsumeActionMixin from './ConsumeAction';

export interface WatchAction extends Schema.ConsumeAction, RdfResource {
}

export default function WatchActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class WatchActionClass extends ConsumeActionMixin(Resource) implements WatchAction {
  }
  return WatchActionClass
}

class WatchActionImpl extends WatchActionMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.WatchAction)
  }
}
WatchActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.WatchAction)
WatchActionMixin.Class = WatchActionImpl
