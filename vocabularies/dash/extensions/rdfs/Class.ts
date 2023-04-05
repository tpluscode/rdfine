import { ExtendingConstructor, Constructor, namespace, property } from '@tpluscode/rdfine';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { rdfs } from '@tpluscode/rdf-ns-builders';
import { dash } from '../../lib/namespace';
import type * as Dash from '../..';
import type * as Rdfs from '@rdfine/rdfs';

interface ClassEx<D extends RDF.DatasetCore = RDF.DatasetCore> {
  abstract: boolean | undefined;
  resourceAction: Array<Dash.ResourceAction<D>>;
}

declare module '@rdfine/rdfs/lib/Class' {
  interface Class<D extends RDF.DatasetCore> extends ClassEx<D> {
  }
}

export function ClassMixinEx<Base extends ExtendingConstructor<Rdfs.Class, ClassEx>>(Resource: Base): Constructor<ClassEx & RdfResourceCore> & Base {
  @namespace(dash)
  class Impl extends Resource implements ClassEx {
    @property.literal({ type: Boolean })
    abstract: boolean | undefined;
    @property.resource({ values: 'array', implicitTypes: [dash.ResourceAction] })
    resourceAction!: Array<Dash.ResourceAction>;
  }
  return Impl
}
ClassMixinEx.appliesTo = rdfs.Class
