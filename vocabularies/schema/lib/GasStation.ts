import * as rdfine from '@tpluscode/rdfine';
import { createFactory, Factory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '../index.js';
import { AutomotiveBusinessMixin } from './AutomotiveBusiness.js';

export interface GasStation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.AutomotiveBusiness<D>, rdfine.RdfResource<D> {
}

declare global {
  interface SchemaVocabulary {
    GasStation: Factory<Schema.GasStation>;
  }
}

export function GasStationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<GasStation & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class GasStationClass extends AutomotiveBusinessMixin(Resource) {
  }
  return GasStationClass as any
}
GasStationMixin.appliesTo = schema.GasStation
GasStationMixin.createFactory = (env: RdfineEnvironment) => createFactory<GasStation>([AutomotiveBusinessMixin, GasStationMixin], { types: [schema.GasStation] }, env)
