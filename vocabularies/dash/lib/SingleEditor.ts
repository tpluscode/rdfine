import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { dash } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '..';
import { EditorMixin } from './Editor';

export interface SingleEditor<D extends RDF.DatasetCore = RDF.DatasetCore> extends Dash.Editor<D>, RdfResource<D> {
}

export function SingleEditorMixin<Base extends Constructor>(Resource: Base) {
  @namespace(dash)
  class SingleEditorClass extends EditorMixin(Resource) implements SingleEditor {
  }
  return SingleEditorClass
}

class SingleEditorImpl extends SingleEditorMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SingleEditor>) {
    super(arg, init)
    this.types.add(dash.SingleEditor)
  }

  static readonly __mixins: Mixin[] = [SingleEditorMixin, EditorMixin];
}
SingleEditorMixin.appliesTo = dash.SingleEditor
SingleEditorMixin.Class = SingleEditorImpl
