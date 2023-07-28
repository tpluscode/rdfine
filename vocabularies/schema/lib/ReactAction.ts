import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { AssessActionMixin } from './AssessAction.js';

export interface ReactAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.AssessAction<D>, rdfine.RdfResource<D> {
}

export function ReactActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<ReactAction & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class ReactActionClass extends AssessActionMixin(Resource) {
  }
  return ReactActionClass as any
}

class ReactActionImpl extends ReactActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ReactAction>) {
    super(arg, init)
    this.types.add(schema.ReactAction)
  }

  static readonly __mixins: Mixin[] = [ReactActionMixin, AssessActionMixin];
}
ReactActionMixin.appliesTo = schema.ReactAction
ReactActionMixin.Class = ReactActionImpl

export const fromPointer = createFactory<ReactAction>([AssessActionMixin, ReactActionMixin], { types: [schema.ReactAction] });
