import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import AchieveActionMixin from './AchieveAction';

export interface TieAction extends Schema.AchieveAction, RdfResource {
}

export default function TieActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class TieActionClass extends AchieveActionMixin(Resource) implements TieAction {
  }
  return TieActionClass
}

class TieActionImpl extends TieActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<TieAction>) {
    super(arg)
    this.types.add(schema.TieAction)
    initializeProperties(this, init)
  }
}
TieActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.TieAction)
TieActionMixin.Class = TieActionImpl
