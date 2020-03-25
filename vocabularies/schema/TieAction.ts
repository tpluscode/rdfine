import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<TieAction>) {
    super(arg, init)
    this.types.add(schema.TieAction)
  }
}
TieActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.TieAction)
TieActionMixin.Class = TieActionImpl
