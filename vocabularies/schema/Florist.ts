import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import StoreMixin from './Store';

export interface Florist extends Schema.Store, RdfResource {
}

export default function FloristMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class FloristClass extends StoreMixin(Resource) implements Florist {
  }
  return FloristClass
}

class FloristImpl extends FloristMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Florist)
  }
}
FloristMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Florist)
FloristMixin.Class = FloristImpl
