import { ExtendingConstructor, Constructor, namespace, property } from '@tpluscode/rdfine';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { sh } from '@tpluscode/rdf-ns-builders';
import { dash } from '../../lib/namespace';
import type * as Dash from '../..';
import type * as Rdfs from '@rdfine/rdfs';
import type * as Shacl from '@rdfine/shacl';
import { ClassMixin as RdfsClassMixin } from '@rdfine/rdfs/lib/Class';

interface ShapeEx<D extends RDF.DatasetCore = RDF.DatasetCore> {
  applicableToClass: Array<Rdfs.Class<D>>;
}

declare module '@rdfine/shacl/lib/Shape' {
  interface Shape<D extends RDF.DatasetCore> extends ShapeEx<D> {
  }
}

export function ShaclShapeMixinEx<Base extends ExtendingConstructor<Shacl.Shape, ShapeEx>>(Resource: Base): Constructor<ShapeEx & RdfResourceCore> & Base {
  @namespace(dash)
  class Impl extends Resource implements ShapeEx {
    @property.resource({ values: 'array', as: [RdfsClassMixin] })
    applicableToClass!: Array<Rdfs.Class>;
  }
  return Impl
}
ShaclShapeMixinEx.appliesTo = sh.Shape
