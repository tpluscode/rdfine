import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { GovernmentBuildingMixin } from './GovernmentBuilding.js';

export interface Embassy<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.GovernmentBuilding<D>, rdfine.RdfResource<D> {
}

export function EmbassyMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Embassy> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class EmbassyClass extends GovernmentBuildingMixin(Resource) implements Partial<Embassy> {
  }
  return EmbassyClass
}

class EmbassyImpl extends EmbassyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Embassy>) {
    super(arg, init)
    this.types.add(schema.Embassy)
  }

  static readonly __mixins: Mixin[] = [EmbassyMixin, GovernmentBuildingMixin];
}
EmbassyMixin.appliesTo = schema.Embassy
EmbassyMixin.Class = EmbassyImpl

export const fromPointer = createFactory<Embassy>([GovernmentBuildingMixin, EmbassyMixin], { types: [schema.Embassy] });
