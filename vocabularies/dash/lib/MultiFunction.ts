import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { dash } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '../index.js';
import type * as Shacl from '@rdfine/shacl';
import { ParameterizableMixin as ShaclParameterizableMixin } from '@rdfine/shacl/lib/Parameterizable.js';

export interface MultiFunction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Shacl.Parameterizable<D>, RdfResource<D> {
}

export function MultiFunctionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<MultiFunction> & RdfResourceCore> & Base {
  @namespace(dash)
  class MultiFunctionClass extends ShaclParameterizableMixin(Resource) implements Partial<MultiFunction> {
  }
  return MultiFunctionClass
}

class MultiFunctionImpl extends MultiFunctionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MultiFunction>) {
    super(arg, init)
    this.types.add(dash.MultiFunction)
  }

  static readonly __mixins: Mixin[] = [MultiFunctionMixin, ShaclParameterizableMixin];
}
MultiFunctionMixin.appliesTo = dash.MultiFunction
MultiFunctionMixin.Class = MultiFunctionImpl

export const fromPointer = createFactory<MultiFunction>([ShaclParameterizableMixin, MultiFunctionMixin], { types: [dash.MultiFunction] });
