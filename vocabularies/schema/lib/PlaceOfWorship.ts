import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CivicStructureMixin } from './CivicStructure.js';

export interface PlaceOfWorship<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CivicStructure<D>, rdfine.RdfResource<D> {
}

export function PlaceOfWorshipMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<PlaceOfWorship> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class PlaceOfWorshipClass extends CivicStructureMixin(Resource) implements Partial<PlaceOfWorship> {
  }
  return PlaceOfWorshipClass
}

class PlaceOfWorshipImpl extends PlaceOfWorshipMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PlaceOfWorship>) {
    super(arg, init)
    this.types.add(schema.PlaceOfWorship)
  }

  static readonly __mixins: Mixin[] = [PlaceOfWorshipMixin, CivicStructureMixin];
}
PlaceOfWorshipMixin.appliesTo = schema.PlaceOfWorship
PlaceOfWorshipMixin.Class = PlaceOfWorshipImpl

export const fromPointer = createFactory<PlaceOfWorship>([CivicStructureMixin, PlaceOfWorshipMixin], { types: [schema.PlaceOfWorship] });
