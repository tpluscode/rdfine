import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CommunicateActionMixin } from './CommunicateAction.js';

export interface InformAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CommunicateAction<D>, rdfine.RdfResource<D> {
  event: Schema.Event<D> | undefined;
}

export function InformActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<InformAction> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class InformActionClass extends CommunicateActionMixin(Resource) implements Partial<InformAction> {
    @rdfine.property.resource()
    event: Schema.Event | undefined;
  }
  return InformActionClass
}

class InformActionImpl extends InformActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<InformAction>) {
    super(arg, init)
    this.types.add(schema.InformAction)
  }

  static readonly __mixins: Mixin[] = [InformActionMixin, CommunicateActionMixin];
}
InformActionMixin.appliesTo = schema.InformAction
InformActionMixin.Class = InformActionImpl

export const fromPointer = createFactory<InformAction>([CommunicateActionMixin, InformActionMixin], { types: [schema.InformAction] });
