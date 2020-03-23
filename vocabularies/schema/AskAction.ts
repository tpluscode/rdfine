import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import CommunicateActionMixin from './CommunicateAction';

export interface AskAction extends Schema.CommunicateAction, RdfResource {
  question: Schema.Question;
}

export default function AskActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class AskActionClass extends CommunicateActionMixin(Resource) implements AskAction {
    @property.resource()
    question!: Schema.Question;
  }
  return AskActionClass
}

class AskActionImpl extends AskActionMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.AskAction)
  }
}
AskActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.AskAction)
AskActionMixin.Class = AskActionImpl
