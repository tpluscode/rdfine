import { ExtendingConstructor, Constructor, namespace, property } from '@tpluscode/rdfine';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { rdfs } from '@tpluscode/rdf-ns-builders';
import { hydra } from '../../lib/namespace';
import type * as Hydra from '../..';
import type * as Rdfs from '@rdfine/rdfs';

interface ClassEx<D extends RDF.DatasetCore = RDF.DatasetCore> {
  supportedProperty: Array<Hydra.SupportedProperty<D>>;
}

declare module '@rdfine/rdfs/lib/Class' {
  interface Class<D extends RDF.DatasetCore> extends ClassEx<D> {
  }
}

export function ClassMixinEx<Base extends ExtendingConstructor<Rdfs.Class, ClassEx>>(Resource: Base): Constructor<ClassEx & RdfResourceCore> & Base {
  @namespace(hydra)
  class Impl extends Resource implements ClassEx {
    @property.resource({ values: 'array', implicitTypes: [hydra.SupportedProperty] })
    supportedProperty!: Array<Hydra.SupportedProperty>;
  }
  return Impl
}
ClassMixinEx.appliesTo = rdfs.Class
