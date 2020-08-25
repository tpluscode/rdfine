import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { CivicStructureMixin } from './CivicStructure';

export interface PlaceOfWorship extends Schema.CivicStructure, RdfResource {
}

export function PlaceOfWorshipMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PlaceOfWorshipClass extends CivicStructureMixin(Resource) implements PlaceOfWorship {
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
