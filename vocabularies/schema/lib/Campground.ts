import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CivicStructureMixin } from './CivicStructure.js';
import { LodgingBusinessMixin } from './LodgingBusiness.js';

export interface Campground<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CivicStructure<D>, Schema.LodgingBusiness<D>, RdfResource<D> {
}

export function CampgroundMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Campground> & RdfResourceCore> & Base {
  @namespace(schema)
  class CampgroundClass extends LodgingBusinessMixin(CivicStructureMixin(Resource)) implements Partial<Campground> {
  }
  return CampgroundClass
}

class CampgroundImpl extends CampgroundMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Campground>) {
    super(arg, init)
    this.types.add(schema.Campground)
  }

  static readonly __mixins: Mixin[] = [CampgroundMixin, CivicStructureMixin, LodgingBusinessMixin];
}
CampgroundMixin.appliesTo = schema.Campground
CampgroundMixin.Class = CampgroundImpl

export const fromPointer = createFactory<Campground>([LodgingBusinessMixin, CivicStructureMixin, CampgroundMixin], { types: [schema.Campground] });
