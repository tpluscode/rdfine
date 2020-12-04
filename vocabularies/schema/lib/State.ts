import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { AdministrativeAreaMixin } from './AdministrativeArea';

export interface State<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.AdministrativeArea<D>, RdfResource<D> {
}

export function StateMixin<Base extends Constructor>(Resource: Base): Constructor<State> & Base {
  @namespace(schema)
  class StateClass extends AdministrativeAreaMixin(Resource) implements State {
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
