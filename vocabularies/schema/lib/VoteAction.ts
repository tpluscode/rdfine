import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ChooseActionMixin } from './ChooseAction';

export interface VoteAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.ChooseAction<D>, RdfResource<D> {
  candidate: Schema.Person<D> | undefined;
}

export function VoteActionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<VoteAction> & RdfResourceCore> & Base {
  @namespace(schema)
  class VoteActionClass extends ChooseActionMixin(Resource) implements Partial<VoteAction> {
    @property.resource()
    candidate: Schema.Person | undefined;
  }
  return VoteActionClass
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
