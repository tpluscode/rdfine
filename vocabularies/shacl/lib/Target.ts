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

export interface Target<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdfs.Resource<D>, rdfine.RdfResource<D> {
}

export function TargetMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Target> & RdfResourceCore> & Base {
  @rdfine.namespace(sh)
  class TargetClass extends RdfsResourceMixin(Resource) implements Partial<Target> {
  }
  return TargetClass
}

class TargetImpl extends TargetMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Target>) {
    super(arg, init)
    this.types.add(sh.Target)
  }

  static readonly __mixins: Mixin[] = [TargetMixin, RdfsResourceMixin];
}
TargetMixin.appliesTo = sh.Target
TargetMixin.Class = TargetImpl

export const fromPointer = createFactory<Target>([RdfsResourceMixin, TargetMixin], { types: [sh.Target] });
