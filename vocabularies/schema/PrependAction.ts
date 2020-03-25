import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import InsertActionMixin from './InsertAction';

export interface PrependAction extends Schema.InsertAction, RdfResource {
}

export default function PrependActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PrependActionClass extends InsertActionMixin(Resource) implements PrependAction {
  }
  return PrependActionClass
}

class PrependActionImpl extends PrependActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<PrependAction>) {
    super(arg)
    this.types.add(schema.PrependAction)
    initializeProperties<PrependAction>(this, init)
  }
}
PrependActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.PrependAction)
PrependActionMixin.Class = PrependActionImpl
