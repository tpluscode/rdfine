import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { doap } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Doap from '../index.js';

export interface Version<D extends RDF.DatasetCore = RDF.DatasetCore> extends rdfine.RdfResource<D> {
  'file-release': RDF.Term | undefined;
  os: RDF.Literal | undefined;
  platform: RDF.Literal | undefined;
  revision: RDF.Literal | undefined;
}

export function VersionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Version> & RdfResourceCore> & Base {
  @rdfine.namespace(doap)
  class VersionClass extends Resource implements Partial<Version> {
    @rdfine.property()
    'file-release': RDF.Term | undefined;
    @rdfine.property()
    os: RDF.Literal | undefined;
    @rdfine.property()
    platform: RDF.Literal | undefined;
    @rdfine.property()
    revision: RDF.Literal | undefined;
  }
  return VersionClass
}

class VersionImpl extends VersionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Version>) {
    super(arg, init)
    this.types.add(doap.Version)
  }

  static readonly __mixins: Mixin[] = [VersionMixin];
}
VersionMixin.appliesTo = doap.Version
VersionMixin.Class = VersionImpl

export const fromPointer = createFactory<Version>([VersionMixin], { types: [doap.Version] });
