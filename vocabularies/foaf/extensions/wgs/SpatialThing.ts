import { ExtendingConstructor, Constructor, namespace, property } from '@tpluscode/rdfine';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { wgs } from '@tpluscode/rdf-ns-builders';
import { foaf } from '../../lib/namespace';
import type * as Foaf from '../..';
import type * as Wgs from '@rdfine/wgs';
import { SpatialThingMixin as WgsSpatialThingMixin } from '@rdfine/wgs/lib/SpatialThing';

interface SpatialThingEx<D extends RDF.DatasetCore = RDF.DatasetCore> {
  'based_near': Wgs.SpatialThing<D> | undefined;
}

declare module '@rdfine/wgs/lib/SpatialThing' {
  interface SpatialThing<D extends RDF.DatasetCore> extends SpatialThingEx<D> {
  }
}

export function SpatialThingMixinEx<Base extends ExtendingConstructor<Wgs.SpatialThing, SpatialThingEx>>(Resource: Base): Constructor<SpatialThingEx & RdfResourceCore> & Base {
  @namespace(foaf)
  class Impl extends Resource implements SpatialThingEx {
    @property.resource({ as: [WgsSpatialThingMixin] })
    'based_near': Wgs.SpatialThing | undefined;
  }
  return Impl
}
SpatialThingMixinEx.appliesTo = wgs.SpatialThing
