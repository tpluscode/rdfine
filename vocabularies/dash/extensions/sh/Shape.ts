import { ExtendingConstructor, Constructor, namespace, property } from '@tpluscode/rdfine';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { sh } from '@tpluscode/rdf-ns-builders';
import { dash } from '../../lib/namespace.js';
import type * as Dash from '../../index.js';
import type * as Rdfs from '@rdfine/rdfs.js';
import type * as Shacl from '@rdfine/shacl.js';
import { ClassMixin as RdfsClassMixin } from '@rdfine/rdfs/lib/Class.js';

interface ShapeEx<D extends RDF.DatasetCore = RDF.DatasetCore> {
  applicableToClass: Array<Rdfs.Class<D>>;
}

declare module '@rdfine/shacl/lib/Shape' {
  interface Shape<D extends RDF.DatasetCore> extends ShapeEx<D> {
  }
}

export function ShapeMixinEx<Base extends ExtendingConstructor<Shacl.Shape, ShapeEx>>(Resource: Base): Constructor<ShapeEx & RdfResourceCore> & Base {
  @namespace(dash)
  class Impl extends Resource implements ShapeEx {
    @property.resource({ values: 'array', as: [RdfsClassMixin] })
    applicableToClass!: Array<Rdfs.Class>;
  }
  return Impl
}
ShapeMixinEx.appliesTo = sh.Shape
