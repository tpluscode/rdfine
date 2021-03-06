import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { LocalBusinessMixin } from './LocalBusiness';

export interface TelevisionStation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.LocalBusiness<D>, RdfResource<D> {
}

export function TelevisionStationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<TelevisionStation> & RdfResourceCore> & Base {
  @namespace(schema)
  class TelevisionStationClass extends LocalBusinessMixin(Resource) implements Partial<TelevisionStation> {
  }
  return TelevisionStationClass
}

class TelevisionStationImpl extends TelevisionStationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<TelevisionStation>) {
    super(arg, init)
    this.types.add(schema.TelevisionStation)
  }

  static readonly __mixins: Mixin[] = [TelevisionStationMixin, LocalBusinessMixin];
}
TelevisionStationMixin.appliesTo = schema.TelevisionStation
TelevisionStationMixin.Class = TelevisionStationImpl

export const fromPointer = createFactory<TelevisionStation>([LocalBusinessMixin, TelevisionStationMixin], { types: [schema.TelevisionStation] });
