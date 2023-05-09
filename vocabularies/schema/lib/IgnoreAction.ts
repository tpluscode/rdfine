import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { AssessActionMixin } from './AssessAction.js';

export interface IgnoreAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.AssessAction<D>, rdfine.RdfResource<D> {
}

export function IgnoreActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<IgnoreAction> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class IgnoreActionClass extends AssessActionMixin(Resource) implements Partial<IgnoreAction> {
  }
  return IgnoreActionClass
}

class IgnoreActionImpl extends IgnoreActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<IgnoreAction>) {
    super(arg, init)
    this.types.add(schema.IgnoreAction)
  }

  static readonly __mixins: Mixin[] = [IgnoreActionMixin, AssessActionMixin];
}
IgnoreActionMixin.appliesTo = schema.IgnoreAction
IgnoreActionMixin.Class = IgnoreActionImpl

export const fromPointer = createFactory<IgnoreAction>([AssessActionMixin, IgnoreActionMixin], { types: [schema.IgnoreAction] });
