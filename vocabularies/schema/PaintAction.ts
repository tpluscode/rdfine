import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import CreateActionMixin from './CreateAction';

export interface PaintAction extends Schema.CreateAction, RdfResource {
}

export default function PaintActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PaintActionClass extends CreateActionMixin(Resource) implements PaintAction {
  }
  return PaintActionClass
}

class PaintActionImpl extends PaintActionMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.PaintAction)
  }
}
PaintActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.PaintAction)
PaintActionMixin.Class = PaintActionImpl
