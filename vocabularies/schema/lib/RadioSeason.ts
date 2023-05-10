import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreativeWorkSeasonMixin } from './CreativeWorkSeason.js';

export interface RadioSeason<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWorkSeason<D>, rdfine.RdfResource<D> {
}

export function RadioSeasonMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<RadioSeason> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class RadioSeasonClass extends CreativeWorkSeasonMixin(Resource) implements Partial<RadioSeason> {
  }
  return RadioSeasonClass
}

class RadioSeasonImpl extends RadioSeasonMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<RadioSeason>) {
    super(arg, init)
    this.types.add(schema.RadioSeason)
  }

  static readonly __mixins: Mixin[] = [RadioSeasonMixin, CreativeWorkSeasonMixin];
}
RadioSeasonMixin.appliesTo = schema.RadioSeason
RadioSeasonMixin.Class = RadioSeasonImpl

export const fromPointer = createFactory<RadioSeason>([CreativeWorkSeasonMixin, RadioSeasonMixin], { types: [schema.RadioSeason] });
