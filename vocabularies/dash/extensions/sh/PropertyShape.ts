import { ExtendingConstructor, Constructor, namespace, property } from '@tpluscode/rdfine';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { sh } from '@tpluscode/rdf-ns-builders';
import { dash } from '../../lib/namespace';
import type * as Dash from '../..';
import type * as Shacl from '@rdfine/shacl';
import { NodeShapeMixin as ShaclNodeShapeMixin } from '@rdfine/shacl/lib/NodeShape';

interface PropertyShapeEx<D extends RDF.DatasetCore = RDF.DatasetCore> {
  composite: boolean | undefined;
  editor: Dash.Editor<D> | undefined;
  hidden: boolean | undefined;
  indexed: boolean | undefined;
  localValues: boolean | undefined;
  mimeTypes: string | undefined;
  readOnly: boolean | undefined;
  reifiableBy: Array<Shacl.NodeShape<D>>;
  viewer: Dash.Viewer<D> | undefined;
}

declare module '@rdfine/shacl/lib/PropertyShape' {
  interface PropertyShape<D extends RDF.DatasetCore> extends PropertyShapeEx<D> {
  }
}

export function PropertyShapeMixinEx<Base extends ExtendingConstructor<Shacl.PropertyShape, PropertyShapeEx>>(Resource: Base): Constructor<PropertyShapeEx & RdfResourceCore> & Base {
  @namespace(dash)
  class Impl extends Resource implements PropertyShapeEx {
    @property.literal({ type: Boolean })
    composite: boolean | undefined;
    @property.resource({ implicitTypes: [dash.Editor] })
    editor: Dash.Editor | undefined;
    @property.literal({ type: Boolean })
    hidden: boolean | undefined;
    @property.literal({ type: Boolean })
    indexed: boolean | undefined;
    @property.literal({ type: Boolean })
    localValues: boolean | undefined;
    @property.literal()
    mimeTypes: string | undefined;
    @property.literal({ type: Boolean })
    readOnly: boolean | undefined;
    @property.resource({ values: 'array', as: [ShaclNodeShapeMixin] })
    reifiableBy!: Array<Shacl.NodeShape>;
    @property.resource({ implicitTypes: [dash.Viewer] })
    viewer: Dash.Viewer | undefined;
  }
  return Impl
}
PropertyShapeMixinEx.appliesTo = sh.PropertyShape
