import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ActionMixin } from './Action.js';

export interface FindAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Action<D>, RdfResource<D> {
}

export function FindActionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<FindAction> & RdfResourceCore> & Base {
  @namespace(schema)
  class FindActionClass extends ActionMixin(Resource) implements Partial<FindAction> {
  }
  return FindActionClass
}

class FindActionImpl extends FindActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<FindAction>) {
    super(arg, init)
    this.types.add(schema.FindAction)
  }

  static readonly __mixins: Mixin[] = [FindActionMixin, ActionMixin];
}
FindActionMixin.appliesTo = schema.FindAction
FindActionMixin.Class = FindActionImpl

export const fromPointer = createFactory<FindAction>([ActionMixin, FindActionMixin], { types: [schema.FindAction] });
