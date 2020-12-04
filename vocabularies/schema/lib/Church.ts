import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { PlaceOfWorshipMixin } from './PlaceOfWorship';

export interface Church<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.PlaceOfWorship<D>, RdfResource<D> {
}

export function ChurchMixin<Base extends Constructor>(Resource: Base): Constructor<Church> & Base {
  @namespace(schema)
  class ChurchClass extends PlaceOfWorshipMixin(Resource) implements Church {
  }
  return ChurchClass
}

class ChurchImpl extends ChurchMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Church>) {
    super(arg, init)
    this.types.add(schema.Church)
  }

  static readonly __mixins: Mixin[] = [ChurchMixin, PlaceOfWorshipMixin];
}
ChurchMixin.appliesTo = schema.Church
ChurchMixin.Class = ChurchImpl
