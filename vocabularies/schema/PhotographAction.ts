import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import { CreateActionMixin } from './CreateAction';

export interface PhotographAction extends Schema.CreateAction, RdfResource {
}

export function PhotographActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PhotographActionClass extends CreateActionMixin(Resource) implements PhotographAction {
  }
  return PhotographActionClass
}

class PhotographActionImpl extends PhotographActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PhotographAction>) {
    super(arg, init)
    this.types.add(schema.PhotographAction)
  }
}
PhotographActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.PhotographAction)
PhotographActionMixin.Class = PhotographActionImpl
