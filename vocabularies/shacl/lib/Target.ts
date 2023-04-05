import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { sh } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '..';
import type * as Rdfs from '@rdfine/rdfs';
import { ResourceMixin as RdfsResourceMixin } from '@rdfine/rdfs/lib/Resource';

export interface Target<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdfs.Resource<D>, RdfResource<D> {
}

export function TargetMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Target> & RdfResourceCore> & Base {
  @namespace(sh)
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
