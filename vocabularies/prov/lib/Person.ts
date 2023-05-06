import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { prov } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '../index.js';
import { AgentMixin } from './Agent.js';

export interface Person<D extends RDF.DatasetCore = RDF.DatasetCore> extends Prov.Agent<D>, RdfResource<D> {
}

export function PersonMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Person> & RdfResourceCore> & Base {
  @namespace(prov)
  class PersonClass extends AgentMixin(Resource) implements Partial<Person> {
  }
  return PersonClass
}

class PersonImpl extends PersonMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Person>) {
    super(arg, init)
    this.types.add(prov.Person)
  }

  static readonly __mixins: Mixin[] = [PersonMixin, AgentMixin];
}
PersonMixin.appliesTo = prov.Person
PersonMixin.Class = PersonImpl

export const fromPointer = createFactory<Person>([AgentMixin, PersonMixin], { types: [prov.Person] });
