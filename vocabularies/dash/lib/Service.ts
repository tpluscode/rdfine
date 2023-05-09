import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { dash } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '../index.js';
import type * as Shacl from '@rdfine/shacl';
import { ParameterizableMixin as ShaclParameterizableMixin } from '@rdfine/shacl/lib/Parameterizable';
import { ScriptMixin } from './Script.js';

export interface Service<D extends RDF.DatasetCore = RDF.DatasetCore> extends Shacl.Parameterizable<D>, Dash.Script<D>, rdfine.RdfResource<D> {
}

export function ServiceMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Service> & RdfResourceCore> & Base {
  @rdfine.namespace(dash)
  class ServiceClass extends ScriptMixin(ShaclParameterizableMixin(Resource)) implements Partial<Service> {
  }
  return ServiceClass
}

class ServiceImpl extends ServiceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Service>) {
    super(arg, init)
    this.types.add(dash.Service)
  }

  static readonly __mixins: Mixin[] = [ServiceMixin, ShaclParameterizableMixin, ScriptMixin];
}
ServiceMixin.appliesTo = dash.Service
ServiceMixin.Class = ServiceImpl

export const fromPointer = createFactory<Service>([ScriptMixin, ShaclParameterizableMixin, ServiceMixin], { types: [dash.Service] });
