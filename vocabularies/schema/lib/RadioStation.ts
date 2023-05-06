import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { LocalBusinessMixin } from './LocalBusiness.js';

export interface RadioStation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.LocalBusiness<D>, RdfResource<D> {
}

export function RadioStationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<RadioStation> & RdfResourceCore> & Base {
  @namespace(schema)
  class RadioStationClass extends LocalBusinessMixin(Resource) implements Partial<RadioStation> {
  }
  return RadioStationClass
}

class RadioStationImpl extends RadioStationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<RadioStation>) {
    super(arg, init)
    this.types.add(schema.RadioStation)
  }

  static readonly __mixins: Mixin[] = [RadioStationMixin, LocalBusinessMixin];
}
RadioStationMixin.appliesTo = schema.RadioStation
RadioStationMixin.Class = RadioStationImpl

export const fromPointer = createFactory<RadioStation>([LocalBusinessMixin, RadioStationMixin], { types: [schema.RadioStation] });
