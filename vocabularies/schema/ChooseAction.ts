import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import AssessActionMixin from './AssessAction';

export interface ChooseAction extends Schema.AssessAction, RdfResource {
  actionOption: Schema.Thing;
  actionOptionLiteral: string;
  option: Schema.Thing;
  optionLiteral: string;
}

export default function ChooseActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ChooseActionClass extends AssessActionMixin(Resource) implements ChooseAction {
    @property.resource()
    actionOption!: Schema.Thing;
    @property.literal({ path: schema.actionOption })
    actionOptionLiteral!: string;
    @property.resource()
    option!: Schema.Thing;
    @property.literal({ path: schema.option })
    optionLiteral!: string;
  }
  return ChooseActionClass
}

class ChooseActionImpl extends ChooseActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<ChooseAction>) {
    super(arg)
    this.types.add(schema.ChooseAction)
    initializeProperties(this, init)
  }
}
ChooseActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ChooseAction)
ChooseActionMixin.Class = ChooseActionImpl
