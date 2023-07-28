import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ChooseActionMixin } from './ChooseAction.js';

export interface VoteAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.ChooseAction<D>, rdfine.RdfResource<D> {
  candidate: Schema.Person<D> | undefined;
}

export function VoteActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<VoteAction & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class VoteActionClass extends ChooseActionMixin(Resource) {
    @rdfine.property.resource()
    candidate: Schema.Person | undefined;
  }
  return VoteActionClass as any
}

class VoteActionImpl extends VoteActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<VoteAction>) {
    super(arg, init)
    this.types.add(schema.VoteAction)
  }

  static readonly __mixins: Mixin[] = [VoteActionMixin, ChooseActionMixin];
}
VoteActionMixin.appliesTo = schema.VoteAction
VoteActionMixin.Class = VoteActionImpl

export const fromPointer = createFactory<VoteAction>([ChooseActionMixin, VoteActionMixin], { types: [schema.VoteAction] });
