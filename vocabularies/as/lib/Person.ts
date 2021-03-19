import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { as } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '..';
import { ObjectMixin } from './Object';

export interface Person<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Object<D>, RdfResource<D> {
}

export function PersonMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Person> & RdfResourceCore> & Base {
  @namespace(as)
  class PersonClass extends ObjectMixin(Resource) implements Partial<Person> {
  }
  return PersonClass
}

class PersonImpl extends PersonMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Person>) {
    super(arg, init)
    this.types.add(as.Person)
  }

  static readonly __mixins: Mixin[] = [PersonMixin, ObjectMixin];
}
PersonMixin.appliesTo = as.Person
PersonMixin.Class = PersonImpl

export const fromPointer = createFactory<Person>([ObjectMixin, PersonMixin], { types: [as.Person] });
