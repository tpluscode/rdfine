import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { dash } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '..';
import { WidgetMixin } from './Widget';

export interface Editor<D extends RDF.DatasetCore = RDF.DatasetCore> extends Dash.Widget<D>, RdfResource<D> {
}

export function EditorMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Editor> & RdfResourceCore> & Base {
  @namespace(dash)
  class EditorClass extends WidgetMixin(Resource) implements Partial<Editor> {
  }
  return EditorClass
}

class EditorImpl extends EditorMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Editor>) {
    super(arg, init)
    this.types.add(dash.Editor)
  }

  static readonly __mixins: Mixin[] = [EditorMixin, WidgetMixin];
}
EditorMixin.appliesTo = dash.Editor
EditorMixin.Class = EditorImpl

export const fromPointer = createFactory<Editor>([WidgetMixin, EditorMixin], { types: [dash.Editor] });
