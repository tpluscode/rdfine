import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import CreativeWorkMixin from './CreativeWork';

export interface Photograph extends Schema.CreativeWork, RdfResource {
}

export default function PhotographMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PhotographClass extends CreativeWorkMixin(Resource) implements Photograph {
  }
  return PhotographClass
}

class PhotographImpl extends PhotographMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Photograph)
  }
}
PhotographMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Photograph)
PhotographMixin.Class = PhotographImpl
