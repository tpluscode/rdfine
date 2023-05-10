import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { UpdateActionMixin } from './UpdateAction.js';

export interface ReplaceAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.UpdateAction<D>, rdfine.RdfResource<D> {
  replacee: Schema.Thing<D> | undefined;
  replacer: Schema.Thing<D> | undefined;
}

export function ReplaceActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<ReplaceAction> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class ReplaceActionClass extends UpdateActionMixin(Resource) implements Partial<ReplaceAction> {
    @rdfine.property.resource()
    replacee: Schema.Thing | undefined;
    @rdfine.property.resource()
    replacer: Schema.Thing | undefined;
  }
  return ReplaceActionClass
}

class ReplaceActionImpl extends ReplaceActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ReplaceAction>) {
    super(arg, init)
    this.types.add(schema.ReplaceAction)
  }

  static readonly __mixins: Mixin[] = [ReplaceActionMixin, UpdateActionMixin];
}
ReplaceActionMixin.appliesTo = schema.ReplaceAction
ReplaceActionMixin.Class = ReplaceActionImpl

export const fromPointer = createFactory<ReplaceAction>([UpdateActionMixin, ReplaceActionMixin], { types: [schema.ReplaceAction] });
