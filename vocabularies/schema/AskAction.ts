import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { CommunicateActionMixin } from './CommunicateAction';

export interface AskAction extends Schema.CommunicateAction, RdfResource {
  question: Schema.Question;
}

export function AskActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class AskActionClass extends CommunicateActionMixin(Resource) implements AskAction {
    @property.resource()
    question!: Schema.Question;
  }
  return AskActionClass
}

class AskActionImpl extends AskActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AskAction>) {
    super(arg, init)
    this.types.add(schema.AskAction)
  }

  static readonly __mixins: Mixin[] = [AskActionMixin, CommunicateActionMixin];
}
AskActionMixin.appliesTo = schema.AskAction
AskActionMixin.Class = AskActionImpl
