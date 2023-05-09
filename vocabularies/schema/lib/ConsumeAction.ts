import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ActionMixin } from './Action.js';

export interface ConsumeAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Action<D>, rdfine.RdfResource<D> {
  actionAccessibilityRequirement: Schema.ActionAccessSpecification<D> | undefined;
  expectsAcceptanceOf: Schema.Offer<D> | undefined;
}

export function ConsumeActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<ConsumeAction> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class ConsumeActionClass extends ActionMixin(Resource) implements Partial<ConsumeAction> {
    @rdfine.property.resource()
    actionAccessibilityRequirement: Schema.ActionAccessSpecification | undefined;
    @rdfine.property.resource()
    expectsAcceptanceOf: Schema.Offer | undefined;
  }
  return ConsumeActionClass
}

class ConsumeActionImpl extends ConsumeActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ConsumeAction>) {
    super(arg, init)
    this.types.add(schema.ConsumeAction)
  }

  static readonly __mixins: Mixin[] = [ConsumeActionMixin, ActionMixin];
}
ConsumeActionMixin.appliesTo = schema.ConsumeAction
ConsumeActionMixin.Class = ConsumeActionImpl

export const fromPointer = createFactory<ConsumeAction>([ActionMixin, ConsumeActionMixin], { types: [schema.ConsumeAction] });
