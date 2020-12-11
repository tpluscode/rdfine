import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { dash } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '..';
import { EditorMixin } from './Editor';

export interface MultiEditor<D extends RDF.DatasetCore = RDF.DatasetCore> extends Dash.Editor<D>, RdfResource<D> {
}

export function MultiEditorMixin<Base extends Constructor>(Resource: Base) {
  @namespace(dash)
  class MultiEditorClass extends EditorMixin(Resource) implements MultiEditor {
  }
  return MultiEditorClass
}

class MultiEditorImpl extends MultiEditorMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MultiEditor>) {
    super(arg, init)
    this.types.add(dash.MultiEditor)
  }

  static readonly __mixins: Mixin[] = [MultiEditorMixin, EditorMixin];
}
MultiEditorMixin.appliesTo = dash.MultiEditor
MultiEditorMixin.Class = MultiEditorImpl
