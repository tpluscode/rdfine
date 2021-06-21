import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { foaf } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Foaf from '..';

export interface Project<D extends RDF.DatasetCore = RDF.DatasetCore> extends RdfResource<D> {
}

export function ProjectMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Project> & RdfResourceCore> & Base {
  @namespace(foaf)
  class ProjectClass extends Resource implements Partial<Project> {
  }
  return ProjectClass
}

class ProjectImpl extends ProjectMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Project>) {
    super(arg, init)
    this.types.add(foaf.Project)
  }

  static readonly __mixins: Mixin[] = [ProjectMixin];
}
ProjectMixin.appliesTo = foaf.Project
ProjectMixin.Class = ProjectImpl

export const fromPointer = createFactory<Project>([ProjectMixin], { types: [foaf.Project] });
