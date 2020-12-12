import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CommunicateActionMixin } from './CommunicateAction';

export interface AskAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CommunicateAction<D>, RdfResource<D> {
  question: Schema.Question<D> | undefined;
}

export function AskActionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<AskAction> & RdfResourceCore> & Base {
  @namespace(schema)
  class AskActionClass extends CommunicateActionMixin(Resource) implements Partial<AskAction> {
    @property.resource()
    question: Schema.Question | undefined;
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

export const fromPointer = createFactory<AskAction>([CommunicateActionMixin, AskActionMixin], { types: [schema.AskAction] });
