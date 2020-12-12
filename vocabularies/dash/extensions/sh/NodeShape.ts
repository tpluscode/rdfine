import { ExtendingConstructor, Constructor, namespace, property } from '@tpluscode/rdfine';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { sh } from '@tpluscode/rdf-ns-builders';
import { dash } from '../../lib/namespace';
import type * as Dash from '../..';
import type * as Shacl from '@rdfine/shacl';
import { ShapeMixin as ShaclShapeMixin } from '@rdfine/shacl/lib/Shape';

interface NodeShapeEx<D extends RDF.DatasetCore = RDF.DatasetCore> {
  defaultViewForRole: Shacl.Shape<D> | undefined;
  shapeScript: Array<Dash.ShapeScript<D>>;
}

declare module '@rdfine/shacl/lib/NodeShape' {
  interface NodeShape<D extends RDF.DatasetCore> extends NodeShapeEx<D> {
  }
}

export function NodeShapeMixinEx<Base extends ExtendingConstructor<Shacl.NodeShape, NodeShapeEx>>(Resource: Base): Constructor<NodeShapeEx & RdfResourceCore> & Base {
  @namespace(dash)
  class Impl extends Resource implements NodeShapeEx {
    @property.resource({ as: [ShaclShapeMixin] })
    defaultViewForRole: Shacl.Shape | undefined;
    @property.resource({ values: 'array', implicitTypes: [dash.ShapeScript] })
    shapeScript!: Array<Dash.ShapeScript>;
  }
  return Impl
}
NodeShapeMixinEx.appliesTo = sh.NodeShape
