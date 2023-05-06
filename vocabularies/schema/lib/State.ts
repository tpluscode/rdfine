import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { AdministrativeAreaMixin } from './AdministrativeArea.js';

export interface State<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.AdministrativeArea<D>, RdfResource<D> {
}

export function StateMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<State> & RdfResourceCore> & Base {
  @namespace(schema)
  class StateClass extends AdministrativeAreaMixin(Resource) implements Partial<State> {
  }
  return StateClass
}

class StateImpl extends StateMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<State>) {
    super(arg, init)
    this.types.add(schema.State)
  }

  static readonly __mixins: Mixin[] = [StateMixin, AdministrativeAreaMixin];
}
StateMixin.appliesTo = schema.State
StateMixin.Class = StateImpl

export const fromPointer = createFactory<State>([AdministrativeAreaMixin, StateMixin], { types: [schema.State] });
