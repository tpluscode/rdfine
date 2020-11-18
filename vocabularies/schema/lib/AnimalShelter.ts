import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { LocalBusinessMixin } from './LocalBusiness';

export interface AnimalShelter<ID extends ResourceNode = ResourceNode> extends Schema.LocalBusiness<ID>, RdfResource<ID> {
}

export function AnimalShelterMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class AnimalShelterClass extends LocalBusinessMixin(Resource) implements AnimalShelter {
  }
  return AnimalShelterClass
}

class AnimalShelterImpl extends AnimalShelterMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AnimalShelter>) {
    super(arg, init)
    this.types.add(schema.AnimalShelter)
  }

  static readonly __mixins: Mixin[] = [AnimalShelterMixin, LocalBusinessMixin];
}
AnimalShelterMixin.appliesTo = schema.AnimalShelter
AnimalShelterMixin.Class = AnimalShelterImpl
