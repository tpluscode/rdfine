import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { sh } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '../index.js';
import type * as Rdfs from '@rdfine/rdfs';
import { ResourceMixin as RdfsResourceMixin } from '@rdfine/rdfs/lib/Resource';

export interface JSExecutable<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdfs.Resource<D>, rdfine.RdfResource<D> {
  jsFunctionName: string | undefined;
}

export function JSExecutableMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<JSExecutable & RdfResourceCore> & Base {
  @rdfine.namespace(sh)
  class JSExecutableClass extends RdfsResourceMixin(Resource) {
    @rdfine.property.literal()
    jsFunctionName: string | undefined;
  }
  return JSExecutableClass as any
}

class JSExecutableImpl extends JSExecutableMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<JSExecutable>) {
    super(arg, init)
    this.types.add(sh.JSExecutable)
  }

  static readonly __mixins: Mixin[] = [JSExecutableMixin, RdfsResourceMixin];
}
JSExecutableMixin.appliesTo = sh.JSExecutable
JSExecutableMixin.Class = JSExecutableImpl

export const fromPointer = createFactory<JSExecutable>([RdfsResourceMixin, JSExecutableMixin], { types: [sh.JSExecutable] });
