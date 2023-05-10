import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { InteractActionMixin } from './InteractAction.js';

export interface JoinAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.InteractAction<D>, rdfine.RdfResource<D> {
  event: Schema.Event<D> | undefined;
}

export function JoinActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<JoinAction> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class JoinActionClass extends InteractActionMixin(Resource) implements Partial<JoinAction> {
    @rdfine.property.resource()
    event: Schema.Event | undefined;
  }
  return JoinActionClass
}

class JoinActionImpl extends JoinActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<JoinAction>) {
    super(arg, init)
    this.types.add(schema.JoinAction)
  }

  static readonly __mixins: Mixin[] = [JoinActionMixin, InteractActionMixin];
}
JoinActionMixin.appliesTo = schema.JoinAction
JoinActionMixin.Class = JoinActionImpl

export const fromPointer = createFactory<JoinAction>([InteractActionMixin, JoinActionMixin], { types: [schema.JoinAction] });
