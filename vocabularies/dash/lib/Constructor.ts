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
import { ScriptMixin } from './Script.js';

export interface Constructor<D extends RDF.DatasetCore = RDF.DatasetCore> extends Shacl.Parameterizable<D>, Dash.Script<D>, RdfResource<D> {
}

export function ConstructorMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Constructor> & RdfResourceCore> & Base {
  @namespace(dash)
  class ConstructorClass extends ScriptMixin(ShaclParameterizableMixin(Resource)) implements Partial<Constructor> {
  }
  return ConstructorClass
}

class ConstructorImpl extends ConstructorMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Constructor>) {
    super(arg, init)
    this.types.add(dash.Constructor)
  }

  static readonly __mixins: Mixin[] = [ConstructorMixin, ShaclParameterizableMixin, ScriptMixin];
}
ConstructorMixin.appliesTo = dash.Constructor
ConstructorMixin.Class = ConstructorImpl

export const fromPointer = createFactory<Constructor>([ScriptMixin, ShaclParameterizableMixin, ConstructorMixin], { types: [dash.Constructor] });
